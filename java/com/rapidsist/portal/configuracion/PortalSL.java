/*
 * Generated by XDoclet - Do not edit!
 */
package com.rapidsist.portal.configuracion;

/**
 * Remote interface for PortalSL.
 * @xdoclet-generated at 22-abril-05 05:33 PM
 */
public interface PortalSL
   extends javax.ejb.EJBObject
{
   /**
    * Verifica si el usuario tiene acceso a la funci�n.
	* @param sCveAplicacion Clave de la aplicaci�n.
	* @param sCvePerfil Clave del perfil.
	* @param sCveFuncion  Clave de la funci�n.
    * @return Los permisos asociados a una funci�n (alta, baja, cambio, consulta)
    */
   public com.rapidsist.portal.configuracion.Permisos validaAccesoFuncion( java.lang.String sCveAplicacion,java.lang.String sCvePerfil,java.lang.String sCveFuncion )
      throws java.rmi.RemoteException;

   /**
    * Obtiene la informaci�n relacionada a una pagina
    * @param sCvePagina Clave de la p�gina
    * @return los datos asociados a la p�gina
    */
   public com.rapidsist.portal.configuracion.Pagina getPagina( java.lang.String sCvePagina )
      throws java.rmi.RemoteException;

   /**
    * Obtiene la informaci�n relacionada a una funci�n.
    * @param sIdFuncion Clave de la funci�n.
    * @return Los datos asociados a una funci�n.
    */
   public com.rapidsist.portal.configuracion.Funcion getFuncion( java.lang.String sIdFuncion )
      throws java.rmi.RemoteException;

   /**
    * Obtiene el men� asociado a un grupo - aplicaci�n
    * @param sCveAplicacion Clave de la aplicaci�n.
	* @param sCvePerfil Clave del perfil.
	* @param sNomAplicacionWeb Nombre de la aplicacion web.
    * @return Men� del grupo aplicaci�n.
    */
   public java.lang.String getMenuAplicacion( java.lang.String sCveAplicacion,java.lang.String sCvePerfil,java.lang.String sNomAplicacionWeb )
      throws java.rmi.RemoteException;

   /**
    * Obtiene el men� horizontal asociado a un grupo - aplicaci�n 
    * @param sCveAplicacion Clave de la aplicaci�n.
	* @param sCvePerfil Clave del perfil.
	* @param sNomAplicacionWeb Nombre de la aplicacion web.
    * @return Men� del grupo aplicaci�n.
    */
   public java.lang.String getMenuAplicacionHorizontal( java.lang.String sCveAplicacion,java.lang.String sCvePerfil,java.lang.String sNomAplicacionWeb )
      throws java.rmi.RemoteException;   
   
   /**
    * Obtiene el men� asociado a un grupo - aplicaci�n
    * @param sClaveMensaje
    */
   public com.rapidsist.portal.configuracion.Mensaje getMensaje( java.lang.String sClaveMensaje )
      throws java.rmi.RemoteException;

   /**
    * Almacena los eventos del usuario en la base de datos
    * @param sCveGpoEmpresa Clave del grupo de empresas
    * @param sCveFuncion Clave de la funci�n.
    * @param sCveUsuario Clave del usuario
    */
   public void almacenaPagina( java.lang.String sCveGpoEmpresa,java.lang.String sCveUsuario,java.lang.String sCvePagina )
      throws java.rmi.RemoteException;

   /**
    * Obtiene la configuraci�n para un usuario.
	* @param sCvePortalDefault Clave del portal default.
    * @param sCveUsuario Clave de usuario. Clave del usuario.
	* @param sNomAplicacionWeb Nombre de la aplicaci�n web.
    * @return Configuraci�n del usuario.
    */
   public com.rapidsist.portal.configuracion.Usuario getConfiguracionUsuario( java.lang.String sCvePortalDefault,java.lang.String sCveUsuario,java.lang.String sNomAplicacionWeb )
      throws java.rmi.RemoteException;

}
