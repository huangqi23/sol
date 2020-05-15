import {saveDragon} from "../../../utils/actions";

export default {
    name: "products-model",

    data() {
        return {
            id:null,
            dragonName:"",
            userId:null,
            description:""
        };
    },
    methods: {
        saveInfo(){
            saveDragon({
                userId: sessionStorage.userId,
                id: this.id,
                dragonName: this.dragonName,
                description: this.description
            }).then(res => {
                if (res.success) {
                    this.$toast.success( "操作成功");
                } else {
                    return false
                }
            })
        },
        publish() {
            let routeName=route.name;
            if(routeName && routeName.indexOf('index-')===0){
                let tab = routeName.replace('index-','');
                if(this.active != tab){
                    this.active = tab
                }
            }
        }
    }

}


