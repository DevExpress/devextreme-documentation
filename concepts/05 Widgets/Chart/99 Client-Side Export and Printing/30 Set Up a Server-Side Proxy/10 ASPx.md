    <!--C#-->
    using System;
    using System.Web;

    namespace ExportService {

        public class ExportHandler : IHttpHandler {
            public void ProcessRequest(HttpContext context) {
                if(context.Request.Form["contentType"] != null && 
                   context.Request.Form["fileName"]    != null && 
                   context.Request.Form["data"]        != null) {
                    context.Response.Clear();
                    context.Response.ContentType = context.Request.Form["contentType"].ToString();
                    context.Response.Charset = "UTF-8";
                    context.Response.Expires = 0;
                    context.Response.AppendHeader("Content-transfer-encoding", "binary");
                    context.Response.AppendHeader("Content-Disposition", 
                                                  "attachment; filename=" + context.Request.Form["fileName"].ToString());
                    context.Response.BinaryWrite(Convert.FromBase64String(context.Request.Form["data"].ToString()));
                    context.Response.Flush();
                    context.Response.End();
                }
            }
            public bool IsReusable {
                get { return false; }
            }
        }
    }

    <!--VB-->
    Imports System
    Imports System.Web

    Namespace ExportService

        Public Class ExportHandler
            Implements IHttpHandler

            Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
                If context.Request.Form("contentType") IsNot Nothing AndAlso
                   context.Request.Form("fileName")    IsNot Nothing AndAlso
                   context.Request.Form("data")        IsNot Nothing Then
                    context.Response.Clear()
                    context.Response.ContentType = context.Request.Form("contentType").ToString()
                    context.Response.Charset = "UTF-8"
                    context.Response.Expires = 0
                    context.Response.AppendHeader("Content-transfer-encoding", "binary")
                    context.Response.AppendHeader("Content-Disposition", "attachment; filename=" & context.Request.Form("fileName").ToString())
                    context.Response.BinaryWrite(Convert.FromBase64String(context.Request.Form("data").ToString()))
                    context.Response.Flush()
                    context.Response.End()
                End If
            End Sub

            Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
                Get
                    Return False
                End Get
            End Property
        End Class

    End Namespace
