const todosApp = {
    data() {
        return {
            tarefas: [],
            newTarefa: {
                done: false
            }
        }
    },
    methods: {
        addTarefa: function(){
            if(this.newTarefa.mensagem) {
                this.tarefas.push(this.newTarefa);
                this.newTarefa = {
                    done: false
                }; 
                window.localStorage.setItem("tarefas", this.tarefas)
            } else {
                    alert("Inserir tarefa!")
                }
            }
        }
    };

Vue.createApp(todosApp).mount('#app')