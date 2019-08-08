https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function-azure-cli
https://github.com/yvele/azure-function-express

az login
mkdir my-actions
cd my-actions
func init
func new --name webhook --template "HttpTrigger"
npm i actions-on-google express azure-function-express
func host start --build
func azure functionapp publish devbox-funcapp
gactions update --action_package action.json --project actions-mytest