<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.a.count}} = {{count3}}</h3>
        <p>
            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
//引入store
    import store from '../../vuex/store'

    import {mapState,mapMutations,mapGetters, mapActions} from 'vuex'
//
    export default{
        name:'count',
        data(){
            return {
                msg:'hello vuex'
            }
        },
        //方法一：直接使用store中数据
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },

        //方法二：使用mapState对象赋值
        // computed:mapState({
        //     count2: state => state.count2
        // }),

        //方法三：使用mapState数组赋值
        computed:{
            ...mapState(["count3"]),
            count(){
                // return this.$store.getters.count;
                return this.$store.a.count;
            }
            // ...mapGetters(["count"])
        },

        //Mutations修改状态
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        },
        store
    }
</script>  