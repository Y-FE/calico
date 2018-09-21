<template>
    <div class="doc-code-show-main">
        <div class="doc-code-show-code" ref="show">
            <slot></slot>
        </div>
        <cc-row 
            justify="center"
            class="doc-code-show-btn" @click.native="showCode = !showCode">
            {{showCode ? '隐藏代码' : '显示代码'}}
        </cc-row>
    </div>
</template>
<style scoped>
    .doc-code-show-main {
        z-index: 20;
        /* user-select: text; */
    }
    .doc-code-show-btn {
        padding: 10px;
        border: 1px solid #282c34;
        cursor: pointer;
        background-color: #fff;
        color: #282c34;
        transition: all .3s;
    }
    .doc-code-show-btn:hover {
        background-color: #282c34;
        color: #fff;
    }
    .doc-code-show-code {
        height: 0;
        overflow: hidden;
        transition-property: height;
        transition-duration: .2s;
        transition-timing-function: linear ;
    }
</style>
<script>
    export default {
        name: 'codeShow',
        components: {
        },
        props: {},
        data() {
            return {
                showCode: false,
            }
        },
        computed: {
        },
        watch: {
            showCode(val, old) {
                this.changeCode();
            }
        },
        methods: {
            changeCode() {
                this.$nextTick(() => {
                    let show = this.$refs.show;
                    if (this.showCode) {
                        show.style.height = `${show.scrollHeight}px`;
                    } else {
                        show.style.height = 0;
                    }
                });
                // console.log(show.clientHeight);
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.changeCode();
        }
    }
</script>