/**
 * Sistema de administraci�n de portales.
 *
 * Copyright (c) 2008 Rapidisist S.A de C.V. Todos los derechos reservados
 */

package com.rapidsist.sim.prestamo.datos;

import com.rapidsist.comun.bd.Conexion2;
import com.rapidsist.comun.bd.Registro;
import com.rapidsist.portal.configuracion.Usuario;
import com.rapidsist.portal.catalogos.OperacionConsultaTabla;
import com.rapidsist.portal.catalogos.ResultadoCatalogo;
import java.util.LinkedList;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ListIterator;
import java.util.Iterator;


/**
 * Administra los accesos a la base de datos para la consulta del estado de cuenta de los cr�ditos.
 */
 
public class SimPrestamoEstadoCuentaDAO extends Conexion2 implements OperacionConsultaTabla  {
	

	/**
	 * Obtiene un conjunto de registros en base ael filtro de b�squeda.
	 * @param parametros Par�metros que se le env�an a la consulta para obtener el conjunto
	 * de registros deseados.
	 * @return Lista de registros.
	 * @throws SQLException Si se genera un error al accesar la base de datos.
	 */
	public LinkedList getRegistros(Registro parametros) throws SQLException{
		
			if (parametros.getDefCampo("CONSULTA").equals("PRESTAMOS")){
				
				if (parametros.getDefCampo("CVE_PRESTAMO").equals("")) {
					if (parametros.getDefCampo("NOMBRE").equals("")) {
					
					sSql = "SELECT \n"+
						   "C.CVE_PRESTAMO, \n"+
						   "C.ID_PRODUCTO, \n"+
						   "C.NOM_PRODUCTO, \n"+
						   "C.NOMBRE, \n"+
						   "C.NUM_CICLO \n"+
						   "FROM V_CREDITO C, \n"+
						   "SIM_CAT_ETAPA_PRESTAMO E, \n"+
						   "SIM_USUARIO_SUCURSAL US \n"+
						   "WHERE  C.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
					       "AND    C.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n"+
					       	   "AND C.APLICA_A != 'INDIVIDUAL_GRUPO' \n"+
						   "AND E.CVE_GPO_EMPRESA = C.CVE_GPO_EMPRESA \n"+
						   "AND E.CVE_EMPRESA = C.CVE_EMPRESA \n"+
						   "AND E.ID_ETAPA_PRESTAMO = C.ID_ETAPA_PRESTAMO \n"+
						   "AND E.B_CANCELADO = 'F' \n"+
						   "AND US.CVE_GPO_EMPRESA = C.CVE_GPO_EMPRESA \n"+
			               "AND US.CVE_EMPRESA = C.CVE_EMPRESA \n"+
			               "AND US.ID_SUCURSAL = C.ID_SUCURSAL \n"+
			               "AND US.CVE_USUARIO = '" + (String)parametros.getDefCampo("CVE_USUARIO") + "' \n"+
						   "ORDER BY CVE_PRESTAMO \n";
					
					}else if (!parametros.getDefCampo("NOMBRE").equals("")) {
						sSql = "SELECT \n"+
						"P.ID_PRESTAMO, \n"+
						"P.CVE_PRESTAMO, \n"+
						"N.NOM_COMPLETO NOMBRE, \n"+
						"P.ID_PRODUCTO, \n"+
						"O.NOM_PRODUCTO, \n"+  
						"C.NUM_CICLO \n"+
						"FROM \n"+
						"SIM_PRESTAMO P, \n"+
						"SIM_PRODUCTO O, \n"+
						"SIM_PRODUCTO_CICLO C, \n"+
						"RS_GRAL_PERSONA N, \n"+
						"SIM_USUARIO_SUCURSAL US \n"+
						"WHERE \n"+
						"P.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
						"AND P.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n"+
						"AND O.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
						"AND O.CVE_EMPRESA = P.CVE_EMPRESA \n"+
						"AND O.ID_PRODUCTO = P.ID_PRODUCTO \n"+
						"AND C.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
						"AND C.CVE_EMPRESA = P.CVE_EMPRESA \n"+
						"AND C.ID_PRODUCTO = P.ID_PRODUCTO \n"+
						"AND C.NUM_CICLO = P.NUM_CICLO \n"+
						"AND N.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
						"AND N.CVE_EMPRESA = P.CVE_EMPRESA \n"+
						"AND N.ID_PERSONA = P.ID_CLIENTE \n"+
						"AND US.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
			            "AND US.CVE_EMPRESA = P.CVE_EMPRESA \n"+
			            "AND US.ID_SUCURSAL = P.ID_SUCURSAL \n"+
			            "AND US.CVE_USUARIO = '" + (String)parametros.getDefCampo("CVE_USUARIO") + "' \n";

						if (!parametros.getDefCampo("CVE_PRESTAMO").equals("")) {
							sSql = sSql + " AND P.CVE_PRESTAMO = '" + (String) parametros.getDefCampo("CVE_PRESTAMO") + "' \n";
						}
						
						if (!parametros.getDefCampo("NOMBRE").equals("")) {
							sSql = sSql + " AND UPPER(N.NOM_COMPLETO) LIKE '%" + ((String) parametros.getDefCampo("NOMBRE")).toUpperCase()  + "%' \n";
						}
						
						sSql = sSql + "UNION \n"+
						"SELECT \n"+
						"P.ID_PRESTAMO_GRUPO ID_PRESTAMO, \n"+
						"P.CVE_PRESTAMO_GRUPO CVE_PRESTAMO, \n"+
						"N.NOM_GRUPO NOMBRE, \n"+
						"P.ID_PRODUCTO, \n"+
						"O.NOM_PRODUCTO, \n"+
						"C.NUM_CICLO \n"+
						"FROM \n"+
						"SIM_PRESTAMO_GRUPO P, \n"+
						"SIM_PRODUCTO O, \n"+
						"SIM_PRODUCTO_CICLO C, \n"+
						"SIM_GRUPO N, \n"+
						"SIM_USUARIO_SUCURSAL US \n"+
						"WHERE \n"+
						"P.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
						"AND P.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n" +
						"AND O.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
						"AND O.CVE_EMPRESA = P.CVE_EMPRESA \n"+
						"AND O.ID_PRODUCTO = P.ID_PRODUCTO \n"+
						"AND C.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
						"AND C.CVE_EMPRESA = P.CVE_EMPRESA \n"+
						"AND C.ID_PRODUCTO = P.ID_PRODUCTO \n"+
						"AND C.NUM_CICLO = P.NUM_CICLO \n"+
						"AND N.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
						"AND N.CVE_EMPRESA = P.CVE_EMPRESA \n"+
						"AND N.ID_GRUPO = P.ID_GRUPO \n"+
						"AND US.CVE_GPO_EMPRESA = N.CVE_GPO_EMPRESA \n"+
			            "AND US.CVE_EMPRESA = N.CVE_EMPRESA \n"+
			            "AND US.ID_SUCURSAL = N.ID_SUCURSAL \n"+
			            "AND US.CVE_USUARIO = '" + (String)parametros.getDefCampo("CVE_USUARIO") + "' \n";
		 
						if (!parametros.getDefCampo("CVE_PRESTAMO").equals("")) {
							sSql = sSql + " AND P.CVE_PRESTAMO_GRUPO = '" + (String) parametros.getDefCampo("CVE_PRESTAMO") + "' \n";
						}
						
						if (!parametros.getDefCampo("NOMBRE").equals("")) {
							sSql = sSql + " AND UPPER(N.NOM_GRUPO) LIKE '%" + ((String) parametros.getDefCampo("NOMBRE")).toUpperCase()  + "%' \n";
						}
						
						sSql = sSql + "ORDER BY ID_PRESTAMO \n";
					}
				}else  {
					sSql = "SELECT \n"+
					"P.ID_PRESTAMO, \n"+
					"P.CVE_PRESTAMO, \n"+
					"N.NOM_COMPLETO NOMBRE, \n"+
					"P.ID_PRODUCTO, \n"+
					"O.NOM_PRODUCTO, \n"+  
					"C.NUM_CICLO \n"+
					"FROM \n"+
					"SIM_PRESTAMO P, \n"+
					"SIM_PRODUCTO O, \n"+
					"SIM_PRODUCTO_CICLO C, \n"+
					"RS_GRAL_PERSONA N, \n"+
					"SIM_USUARIO_SUCURSAL US \n"+
					"WHERE \n"+
					"P.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
					"AND P.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n"+
					"AND O.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
					"AND O.CVE_EMPRESA = P.CVE_EMPRESA \n"+
					"AND O.ID_PRODUCTO = P.ID_PRODUCTO \n"+
					"AND C.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
					"AND C.CVE_EMPRESA = P.CVE_EMPRESA \n"+
					"AND C.ID_PRODUCTO = P.ID_PRODUCTO \n"+
					"AND C.NUM_CICLO = P.NUM_CICLO \n"+
					"AND N.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
					"AND N.CVE_EMPRESA = P.CVE_EMPRESA \n"+
					"AND N.ID_PERSONA = P.ID_CLIENTE \n"+
					"AND US.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
		            "AND US.CVE_EMPRESA = P.CVE_EMPRESA \n"+
		            "AND US.ID_SUCURSAL = P.ID_SUCURSAL \n"+
		            "AND US.CVE_USUARIO = '" + (String)parametros.getDefCampo("CVE_USUARIO") + "' \n";

					if (!parametros.getDefCampo("CVE_PRESTAMO").equals("")) {
						sSql = sSql + " AND P.CVE_PRESTAMO = '" + (String) parametros.getDefCampo("CVE_PRESTAMO") + "' \n";
					}
					
					if (!parametros.getDefCampo("NOMBRE").equals("")) {
						sSql = sSql + " AND UPPER(N.NOM_COMPLETO) LIKE '%" + ((String) parametros.getDefCampo("NOMBRE")).toUpperCase()  + "%' \n";
					}
					
					sSql = sSql + "UNION \n"+
					"SELECT \n"+
					"P.ID_PRESTAMO_GRUPO ID_PRESTAMO, \n"+
					"P.CVE_PRESTAMO_GRUPO CVE_PRESTAMO, \n"+
					"N.NOM_GRUPO NOMBRE, \n"+
					"P.ID_PRODUCTO, \n"+
					"O.NOM_PRODUCTO, \n"+
					"C.NUM_CICLO \n"+
					"FROM \n"+
					"SIM_PRESTAMO_GRUPO P, \n"+
					"SIM_PRODUCTO O, \n"+
					"SIM_PRODUCTO_CICLO C, \n"+
					"SIM_GRUPO N, \n"+
					"SIM_USUARIO_SUCURSAL US \n"+
					"WHERE \n"+
					"P.CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n" +
					"AND P.CVE_EMPRESA = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n" +
					"AND O.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
					"AND O.CVE_EMPRESA = P.CVE_EMPRESA \n"+
					"AND O.ID_PRODUCTO = P.ID_PRODUCTO \n"+
					"AND C.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
					"AND C.CVE_EMPRESA = P.CVE_EMPRESA \n"+
					"AND C.ID_PRODUCTO = P.ID_PRODUCTO \n"+
					"AND C.NUM_CICLO = P.NUM_CICLO \n"+
					"AND N.CVE_GPO_EMPRESA = P.CVE_GPO_EMPRESA \n"+
					"AND N.CVE_EMPRESA = P.CVE_EMPRESA \n"+
					"AND N.ID_GRUPO = P.ID_GRUPO \n"+
					"AND US.CVE_GPO_EMPRESA = N.CVE_GPO_EMPRESA \n"+
		            "AND US.CVE_EMPRESA = N.CVE_EMPRESA \n"+
		            "AND US.ID_SUCURSAL = N.ID_SUCURSAL \n"+
		            "AND US.CVE_USUARIO = '" + (String)parametros.getDefCampo("CVE_USUARIO") + "' \n";
	 
					if (!parametros.getDefCampo("CVE_PRESTAMO").equals("")) {
						sSql = sSql + " AND P.CVE_PRESTAMO_GRUPO = '" + (String) parametros.getDefCampo("CVE_PRESTAMO") + "' \n";
					}
					
					if (!parametros.getDefCampo("NOMBRE").equals("")) {
						sSql = sSql + " AND UPPER(N.NOM_GRUPO) LIKE '%" + ((String) parametros.getDefCampo("NOMBRE")).toUpperCase()  + "%' \n";
					}
					
					sSql = sSql + "ORDER BY ID_PRESTAMO \n";
				}
				
			}else if (parametros.getDefCampo("CONSULTA").equals("MOVIMIENTOS")){
				
				
			
			sSql =  "SELECT \n"+
					"CVE_GPO_EMPRESA, \n"+
					"CVE_EMPRESA, \n"+
					"ID_PRESTAMO, \n"+
					"F_APLICACION, \n"+
					"F_OPERACION FECHA_OPERACION, \n"+
					"DESC_MOVIMIENTO DESCRIPCION, \n"+
					"TO_CHAR(NVL(ROUND(IMP_PAGO,2),0),'999,999,999.99') IMPORTE, \n"+
		         	"NUM_PAGO_AMORTIZACION, \n"+
		         	"ID_MOVIMIENTO, \n"+
		         	"TO_CHAR(NVL(ROUND(IMP_CONCEPTO,2),0),'999,999,999.99') IMP_DESGLOSE \n"+
		    		"FROM V_SIM_PRESTAMO_MOV_EDO_CTA \n"+
		   			"WHERE CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' AND \n"+
		         	"CVE_EMPRESA     = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "'  AND \n"+
		         	"ID_PRESTAMO     = '" + (String)parametros.getDefCampo("ID_PRESTAMO") + "' \n"+
		            "AND F_OPERACION <= (SELECT  F_MEDIO \n"+ 
					"                    FROM    PFIN_PARAMETRO \n"+ 
					"                    WHERE   CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n"+
					"                    AND CVE_EMPRESA     = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n"+ 
					"                    AND CVE_MEDIO       = 'SYSTEM') \n"+
					"AND NUM_PAGO_AMORTIZACION != 0 \n"+
					"ORDER BY F_APLICACION, FECHA_OPERACION, ID_MOVIMIENTO, IMPORTE DESC \n";
			
			}else if (parametros.getDefCampo("CONSULTA").equals("SALDO_FECHA")){	
				
				sSql =  "SELECT \n"+
				"TO_CHAR(SUM(IMP_CONCEPTO),'999,999,999.99') IMP_DESGLOSE FROM ( \n"+
				"SELECT \n"+
				"CVE_GPO_EMPRESA, \n"+
				"CVE_EMPRESA, \n"+
				"ID_PRESTAMO, \n"+
				"F_APLICACION, \n"+
				"F_OPERACION FECHA_OPERACION, \n"+
				"DESC_MOVIMIENTO DESCRIPCION, \n"+
				"IMP_PAGO, \n"+
	         	"NUM_PAGO_AMORTIZACION, \n"+
	         	"ID_MOVIMIENTO, \n"+
	         	"IMP_CONCEPTO, \n"+
	         	"SUM(IMP_CONCEPTO) OVER ( \n"+
	         	"ORDER BY F_APLICACION, \n"+
	         	"NUM_PAGO_AMORTIZACION, \n"+
	         	"ID_MOVIMIENTO, \n"+
	         	"DESC_MOVIMIENTO) AS IMP_SALDO \n"+
	    		"FROM V_SIM_PRESTAMO_MOV_EDO_CTA \n"+
	   			"WHERE CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' AND \n"+
	         	"CVE_EMPRESA     = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "'  AND \n"+
	         	"ID_PRESTAMO     = '" + (String)parametros.getDefCampo("ID_PRESTAMO") + "' \n"+
	            "AND F_OPERACION <= (SELECT  F_MEDIO \n"+ 
				"                    FROM    PFIN_PARAMETRO \n"+ 
				"                    WHERE   CVE_GPO_EMPRESA = '" + (String)parametros.getDefCampo("CVE_GPO_EMPRESA") + "' \n"+
				"                    AND CVE_EMPRESA     = '" + (String)parametros.getDefCampo("CVE_EMPRESA") + "' \n"+ 
				"                    AND CVE_MEDIO       = 'SYSTEM') \n"+
				") \n";
				
			}
			
			
			 
		ejecutaSql();
		return getConsultaLista();
	}
}