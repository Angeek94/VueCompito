var vue = new Vue({
    el: '#app',
    data: {
        user:null,
        users:"",
        toDos:[],
        toDoUsers:[],
        name:"",
        description:"",
        completed:"",
       assignedTo:"",
       toDoId:null,
       toDoUser:"",
       statusUser:null,
       statusUsers:[],
       error:"non puoi inserire utente",
       statusId:null
    },
    methods: { 
        postUsers:function(){
           
            this.$http.post('http://localhost:3001/postUsers',{
               user:this.user,
                
            })
            .then(response => { console.log(response)})
            .catch(error => {  })
            
        },
        post:function(){
           
            this.$http.post('http://localhost:3001/post',{
                name:this.name,
                description:this.description,
                completed:this.completed,
                assignedTo:this.assignedTo
            })
            .then(response => { console.log(response)})
            .catch(error => {  })
            
        },
        loadUsers: function() {
            var url = 'http://localhost:3001/getUsers';
            this.$http.get(url).then(response => {
                this.users= response.body;
            })
            .catch(error => {  })
        },
        loadToDos: function() {
            var url = 'http://localhost:3001/getToDo';
            this.$http.get(url).then(response => {
                this.toDos= response.body;
                
            })
            .catch(error => {  })
        },
        deleteToDo: function() {
            var url = 'http://localhost:3001/deleteToDo/'+ this.toDoId;
            this.$http.delete(url).then(response => {
                this.toDos=response.body
            })
            .catch(error => {  })
        },
        getToDoByUser: function() {
            var url = 'http://localhost:3001/getToDoByUser/?user='+ this.toDoUser;
            this.$http.get(url).then(response => {
                this.toDoUsers=response.body
            })
            .catch(error => {  })
        },
        putStatusById: function() {
            var url = 'http://localhost:3001/putStatusById/'+ this.statusId;
            this.$http.put(url).then(response => {
                this.toDos=response.body
            })
            .catch(error => {  })
        },
        getStatus: function() {
            var url = 'http://localhost:3001/getToDoByStatus/?status='+ this.statusUser;
            this.$http.get(url).then(response => {
                this.statusUsers=response.body
            })
            .catch(error => {  })
        },
        getStatus1: function() {
            var url = 'http://localhost:3001/getToDoByStatus/?status='+ this.statusUser;
            this.$http.get(url).then(response => {
                this.statusUsers=response.body
            })
            .catch(error => {  })
        },
       
    },
    created: function() {
        
     
        this.loadToDos();
    },
    watch: {
        /*'code': function (newVal) {
            if(newVal.length === 3){
                this.loadMatchesByCode(newVal);
            }
        }*/
        'currentTeam': function(newVal, oldVal) {
            if (newVal === null && oldVal !== null) {
               
            }
        }
    }
})