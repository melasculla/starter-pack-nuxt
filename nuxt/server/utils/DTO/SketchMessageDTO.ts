import { EmailNotificationDTO } from "../interfaces";

export class SketchMessageDTO extends EmailNotificationDTO {
   constructor(to: string, userName: string, href: URL) {
      const subject = 'New Sketch was created!'
      const plainText = `Hello ${userName},\nNew Sketch was created for you! ${href}`
      const htmlTemplate = `
         <!DOCTYPE html>
         <html>
         <head>
            <meta charset="UTF-8">
            <title>New Sketch Notification</title>
            <style>
               .email-link {
               color: #1a73e8;
               text-decoration: none;
               }
               .email-container {
               font-family: Arial, sans-serif;
               max-width: 600px;
               margin: 0 auto;
               }
               .email-footer {
               font-size: 12px;
               color: #777;
               text-align: center;
               margin-top: 20px;
               }
            </style>
         </head>
         <body>
            <div class="email-container">
               <p>Hello {{userName}}!</p>
               <p>New Sketch was created for you.</p>
               <p>
                  <a href="{{href}}" class="email-link" target="_blank">Check this out</a>
               </p>
               <p>
                  If the link doesn't work, copy and paste this URL into your browser:
                  <br />
                  <a href="{{href}}" class="email-link" target="_blank">{{href}}</a>
               </p>
               <div class="email-footer">
                  <p>&copy; 2024 Art Studio «Traditions of Times». All rights reserved.</p>
               </div>
            </div>
         </body>
         </html>
      `

      super(to, subject, plainText, htmlTemplate, { userName, href })
   }
}