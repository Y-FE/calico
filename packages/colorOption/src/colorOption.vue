<template>    
    <li class="cat-color-option" 
        @click="optionClick(value)"
        :style="{'background-color':value}">
        <slot></slot>
    </li>
</template>
<style lang="scss">
    .cat-color-option {
        width: $--color-select-option-size;
        height: $--color-select-option-size;
        cursor: pointer;
        &:hover {
            filter: brightness(90%);
        }
    }
   
    
</style>
<script>
    // import Emitter from "../mixins/emitter";
    export default {
        name: 'CcColorOption',
        // mixins: [Emitter],
        components: {
        },
        props: {
            value:{ //颜色值
                type:String,
                default: ''
            }
        },
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            optionClick(){
                // this.$nextTick(() => {
                //     this.dispatch("CcColorSelect", "optionClick", this.value);
                // });
                this.$emit('input',this.value);
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>