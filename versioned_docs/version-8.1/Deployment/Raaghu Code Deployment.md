# Raaghu Code Deployment

#### Prerequisites
- Node.js installed on your system
- Access to the target web server for deployment
- A deployed ABP application that acts as backend

#### Enviorment File (.env) Changes
 
Make sure to replace backend and frontend application URLs:

````json 
NODE_ENV=production
REACT_APP_URL=<Web App URL>
REACT_APP_API_URL=<Backend URL>
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID=<Your_Client_ID>
REACT_APP_SCOPE=address openid email phone profile roles offline_access <Backend application name>
REACT_APP_REPLACE_URL=true
REACT_APP_Version=8.0
````

## Deployment Steps
#### 1. Install Dependencies
Ensure that all necessary dependencies are installed by running the following command:

````json
npm run install-all
````
#### 2. Build the Code
Build the React code using the following command:
````json
npm run build
````
This command compiles the React code and generates a production-ready build in the raaghu-mfe/rds_pages/host/dist directory.

#### 3. Copy Files
Copy specific files to the designated location after the build process. Use the following commands:

````json
cp raaghu-mfe/web.config raaghu-mfe/rds_pages/host/dist   
cp raaghu-mfe/rds_pages/host/public/favicon.ico raaghu-mfe/rds_pages/host/dist
````
These commands copy the web.config and favicon.ico files to the raaghu-mfe/rds_pages/host/dist directory, ensuring they are included in the deployment package.

#### 4. Upload the Package to Web Apps

Finally, upload the contents of the **'raaghu-mfe/rds_pages/host/dist'** directory to your Web Apps server for deployment.

#### Conclusion
By following these steps, you can successfully deploy your Raaghu code to a web server. Ensure that all necessary files are included in the deployment package for smooth execution on the target server.
 