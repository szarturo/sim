/**
 * Sistema de administraci�n de portales.
 *
 * Copyright (c) 2008 Rapidisist S.A de C.V. Todos los derechos reservados
 */

package com.rapidsist.sim.prestamo.datos;

import com.rapidsist.comun.bd.Conexion2;
import com.rapidsist.comun.bd.Registro;
import com.rapidsist.portal.catalogos.OperacionAlta;
import com.rapidsist.portal.catalogos.OperacionConsultaTabla;
import com.rapidsist.portal.catalogos.ResultadoCatalogo;
import java.util.LinkedList;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


/**
 * Administra los accesos a la base de datos para las garant�a del pr�stamo.
 */
 
public class SimPrestamoCambioAsesorDAO extends Conexion2 implements OperacionConsultaTabla, OperacionAlta {

	/**
	 * Obtiene un conjunto de registros en base al filtro de b�squeda.
	 * @param parametros Par�metros que se le env�an a la consulta para obtener el conjunto
	 * de registros deseados.
	 * @return Lista de registros.
	 * @throws SQLException Si se genera un error al accesar la base de datos.
	 */
	public LinkedList getRegistros(Registro parametros) throws SQLException{
		
		if (parametros.getDefCampo("CONSULTA").equals("ASESOR")){
			sSql =  "SELECT DISTINCT \n"+ 
					"U.CVE_USUARIO, \n"+ 
					"U.ID_SUCURSAL, \n"+ 
					"P.NOM_COMPLETO \n"+ 
					"FROM SIM_SUCURSAL_ASESOR U, \n"+ 
					"RS_GRAL_PERSONA P \n"+ 
					"WHERE U.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
					"AND U.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n" +
					"AND P.CVE_GPO_EMPRESA = U.CVE_GPO_EMPRESA \n"+ 
					"AND P.CVE_EMPRESA = U.CVE_EMPRESA \n"+ 
					"AND P.ID_PERSONA = U.ID_ASESOR \n";
			
			if (parametros.getDefCampo("NOM_COMPLETO") != null) {
				sSql = sSql + "AND UPPER(P.NOM_COMPLETO) LIKE '%" + ((String) parametros.getDefCampo("NOM_COMPLETO")).toUpperCase() + "%' \n";
			}
		
			if (parametros.getDefCampo("ID_SUCURSAL") != null) {
				sSql = sSql + "AND U.ID_SUCURSAL = '" + (String) parametros.getDefCampo("ID_SUCURSAL") + "' \n";
			}
			
			sSql = sSql + "ORDER BY P.NOM_COMPLETO \n";
		}else if (parametros.getDefCampo("CONSULTA").equals("CAMBIO_ASESOR")){
			sSql =  "SELECT DISTINCT \n"+ 
					"U.CVE_USUARIO, \n"+ 
					"P.NOM_COMPLETO \n"+ 
					"FROM SIM_SUCURSAL_ASESOR U, \n"+ 
					"RS_GRAL_PERSONA P \n"+ 
					"WHERE U.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
					"AND U.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n" +
					"AND U.ID_SUCURSAL = '" + (String) parametros.getDefCampo("ID_SUCURSAL") + "' \n"+
					"AND P.CVE_GPO_EMPRESA = U.CVE_GPO_EMPRESA \n"+ 
					"AND P.CVE_EMPRESA = U.CVE_EMPRESA \n"+ 
					"AND P.ID_PERSONA = U.ID_ASESOR \n"+
					"ORDER BY P.NOM_COMPLETO \n";
			
		}
		
		else if (parametros.getDefCampo("CONSULTA").equals("PRESTAMO")){
			sSql =  "SELECT * FROM V_CREDITO \n"+
			"WHERE CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
			"AND CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n" +
			"AND APLICA_A != 'INDIVIDUAL_GRUPO' \n"+
			"AND CVE_ASESOR_CREDITO = '" + (String)parametros.getDefCampo("CVE_USUARIO") + "' \n" +
			"AND ID_SUCURSAL = '" + (String)parametros.getDefCampo("ID_SUCURSAL") + "' \n" ;
			
		}
		ejecutaSql();
		return getConsultaLista();
	}
	
	/**
	 * Inserta un registro.
	 * @param registro Campos del nuevo registro.
	 * @return Objeto que contiene el resultado de la ejecuci�n de este m�todo.
	 * @throws SQLException Si se genera un error al accesar la base de datos.
	 */
	public ResultadoCatalogo alta(Registro registro) throws SQLException{
		ResultadoCatalogo resultadoCatalogo = new ResultadoCatalogo();
		
		if (registro.getDefCampo("APLICA").equals("GRUPO")){
			sSql =  " UPDATE SIM_PRESTAMO_GRUPO SET \n"+
			 		" CVE_ASESOR_CREDITO     	= '" + (String)registro.getDefCampo("CVE_ASESOR_CREDITO")  + "' \n" +
			 		" WHERE ID_PRESTAMO_GRUPO   = '" + (String)registro.getDefCampo("ID_PRESTAMO") + "' \n" +
			 		" AND CVE_GPO_EMPRESA   	= '" + (String)registro.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
			 		" AND CVE_EMPRESA   		= '" + (String)registro.getDefCampo("CVE_EMPRESA") + "' \n";
			   
			//VERIFICA SI NO SE DIO DE ALTA EL REGISTRO
			if (ejecutaUpdate() == 0){
				resultadoCatalogo.mensaje.setClave("CATALOGO_NO_OPERACION");
			}
		}else if (registro.getDefCampo("APLICA").equals("INDIVIDUAL")){
			sSql =  " UPDATE SIM_PRESTAMO SET \n"+
			 		" CVE_ASESOR_CREDITO     	= '" + (String)registro.getDefCampo("CVE_ASESOR_CREDITO")  + "' \n" +
			 		" WHERE ID_PRESTAMO   = '" + (String)registro.getDefCampo("ID_PRESTAMO") + "' \n" +
			 		" AND CVE_GPO_EMPRESA   	= '" + (String)registro.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
			 		" AND CVE_EMPRESA   		= '" + (String)registro.getDefCampo("CVE_EMPRESA") + "' \n";
			   
			//VERIFICA SI NO SE DIO DE ALTA EL REGISTRO
			if (ejecutaUpdate() == 0){
				resultadoCatalogo.mensaje.setClave("CATALOGO_NO_OPERACION");
			}
		}
				
		return resultadoCatalogo;
	}
}