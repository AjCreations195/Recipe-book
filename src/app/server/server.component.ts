import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    allownewServer=false;
    serverCreation='No server was created';
    serverName='testServer';
    serverPort='demo'
    status=false;
    userName='';
    serverStatus='offline'
    name='jafna'
    serverId=15;
    servers="['jafna', 'testServer2']"
password=false
log=[]
    
    constructor(){
        this.serverStatus = Math.random() >0.5? 'online' : 'offline',
        setTimeout(()=>{
            this.allownewServer=true;
        },2000)
                }
         

        onCreateServer(){
            this.serverCreation='Server was created..and name is '+this.serverName;
        }  
        
        onUpdateServer(event){
            
            this.serverName=(<HTMLInputElement>event.target).value
            
        }
        reset(){
            this.userName=''
        }


        onClick(){
            this.status=true
        }
        getServerStatus(){
            return this.serverStatus
        }
        getColor(){
            return this.serverStatus==='online' ? 'green':' red';
        }

        ChangeVisible(){
            this.password=!this.password
            this.log.push(new Date())
        }
    }