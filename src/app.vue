<template>
    <!-- <div id="test">{{text}}</div> -->
    <div id="app">
        <div id="cover">

        </div>
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
    // data() {
    //     return {
    //         text: 'hello vue! 你们好呀！'
    //     }
    // }
    components: {
        Header,
        Footer,
        Todo,
    }
}
</script>

<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
/* #test{
    color: red
} */
</style>


