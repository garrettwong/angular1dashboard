using System;
using System.IO;
using System.Web.Mvc;

namespace DashboardTemplate.Controllers
{
    /// <summary>
    /// Export Home/Index
    /// </summary>
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return File(Server.MapPath("/") + "index.html", "text/html");
        }
    }
}