using IdentityServer3.Core;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using Owin;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Helpers;

namespace DashboardTemplate
{
    public class AuthConfig
    {
        public static void Register(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = "Cookies"
            });

            AntiForgeryConfig.UniqueClaimTypeIdentifier = Constants.ClaimTypes.Subject;
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();

            app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions
            {
                Authority = "http://lee-brian/DDT.IdentityServer/identity",
                ClientId = "a0d8ffc0ad0d4f00afd5400ab2fbe04b",
                RedirectUri = "http://localhost/TaskAutomation.WebUI/Home/Flipboard",
                ResponseType = "id_token",
                SignInAsAuthenticationType = "Cookies",

                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    SecurityTokenValidated = n =>
                    {
                        var id = n.AuthenticationTicket.Identity;
                        var nid = new ClaimsIdentity(
                                                id.AuthenticationType,
                                                Constants.ClaimTypes.GivenName,
                                                Constants.ClaimTypes.Role);

                        var firstname = id.FindFirst(Constants.ClaimTypes.GivenName);
                        var lastname = id.FindFirst(Constants.ClaimTypes.FamilyName);
                        var fullname = id.FindFirst(Constants.ClaimTypes.Name);
                        var email = id.FindFirst(Constants.ClaimTypes.Email);
                        var roles = id.FindAll(Constants.ClaimTypes.Role);

                        nid.AddClaim(firstname);
                        nid.AddClaim(lastname);
                        nid.AddClaim(fullname);
                        nid.AddClaim(email);
                        nid.AddClaims(roles);

                        n.AuthenticationTicket = new AuthenticationTicket(nid, n.AuthenticationTicket.Properties);

                        return Task.FromResult(0);
                    }
                }
            });

        }
    }
}
