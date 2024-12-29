import { BaseEmailFormType } from "~~/server/handlers/notification";
import { EmailNotificationDTO } from "../interfaces";

const config = useRuntimeConfig()

export class FormMessageDTO extends EmailNotificationDTO {
   constructor(object: BaseEmailFormType) {
      const subject = 'New form from ' + config.public.baseUrl
      const plainText = `${object.name}\n${object.email}`
      const htmlTemplate = `
         <!DOCTYPE html>
         <html>
         <head>
            <meta charset="UTF-8">
            <title>New form</title>
            <style>
               .email-link {
                  color: #1a73e8;
                  text-decoration: none;
               }
               .email-container {
                  font-family: Arial, sans-serif;
                  font-size: 3rem;
                  max-width: 600px;
                  margin: 0 auto;
               }
               .email-footer {
                  font-size: 1rem;
                  color: #777;
                  text-align: center;
                  margin-top: 4rem;
               }
            </style>
         </head>
         <body>
            <div class="email-container">
               <div>
                  <p><b>Name: </b>{{name}}</p>
                  {{#if phone}}
                  <p><b>Phone: </b>{{phone}} ({{phoneCountry}})</p>
                  {{/if}}
                  <p><b>Email: </b>{{email}}</p>
                  {{#if message}}
                  <p><b>message: </b>{{message}}</p>
                  {{/if}}
                  {{#if services}}
                  <div>
                     <p><b style="color: blue; font-weight: bold;">Additional services</b></p>
                     {{#if services.dev}}
                     <p>Website development</p>
                     {{/if}}
                     {{#if services.logoDesign}}
                     <p>Logo/Design</p>
                     {{/if}}
                     {{#if services.gerbs}}
                     <p>Family Coat of Arms</p>
                     {{/if}}
                     {{#if services.monograms}}
                     <p>Monograms</p>
                     {{/if}}
                  </div>
                  {{/if}}
                  {{#if favourites}}
                  <div>
                     <p><b style="color: blue; font-weight: bold;">Favourites</b></p>
                     {{#each favourites}}
                        <a href="{{this.link}}" target="_blank">{{this.title}}</a>
                     {{/each}}
                  </div>
                  {{/if}}
               </div>
               <div class="email-footer">
                  <p>&copy; 2024 Art Studio «Traditions of Times». All rights reserved.</p>
               </div>
            </div>
         </body>
         </html>
      `

      super(
         undefined,
         subject,
         plainText,
         htmlTemplate,
         object,
         object.email
      )
   }
}