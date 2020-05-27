import {saveDragon} from "../../../utils/actions";

export default {
    name: "products-model",

    data() {
        return {
            id:null,
            dragonName:"",
            userId:null,
            description:"",
            tips:"",
            dragonTimes:null,

            //接龙开始时间
            showBeginTime: false,
            showEndTime: false,
            showDeliveryTime:false,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),

            beginTime: new Date(),
            endTime: new Date(),
            deliveryTime: new Date(),
        };
    },
    methods: {
        saveInfo(){
            saveDragon({
                userId: sessionStorage.userId,
                id: this.id,
                dragonName: this.dragonName,
                description: this.description,
                beginTime: this.beginTime,
                endTime: this.endTime,
                isPublish: 0,
                dragonTimes:this.dragonTimes
            }).then(res => {
                if (res.success) {
                    // this.$toast.success( "操作成功");
                    this.$router.push('/dashboard/myDragon')
                } else {
                    return false
                }
            })
        },
        publish() {
            saveDragon({
                userId: sessionStorage.userId,
                id: this.id,
                dragonName: this.dragonName,
                description: this.description,
                beginTime: this.beginTime,
                endTime: this.endTime,
                isPublish: 1,
                tips:this.tips
            }).then(res => {
                if (res.success) {
                    // this.$toast.success( "操作成功");
                    this.$router.push('/dashboard/myDragon')
                } else {
                    return false
                }
            })
        },

    }

}


