import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Secure-Passport-Web-App';
  constructor(
    private oauthService: OAuthService
    ) {
      this.oauthService.redirectUri = window.location.origin;
      this.oauthService.clientId = '0oac8ilw2p7HALK9u5d6';
      this.oauthService.scope = 'openid profile email';
      this.oauthService.issuer = 'https://dev-19656455.okta.com/oauth2/default';
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}
