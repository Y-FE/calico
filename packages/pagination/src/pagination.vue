<template>
    <div class="cat-pagination">
            <cc-icon-default icon="icon-pre" 
                :disabled="value === 1"
                @click="preClick">
            </cc-icon-default>
        <span class="cat-pagination-page">
            <span class="cat-pagination--current">{{value}}</span>
            <span class="cat-cat-pagination-line">/</span>
            <span class="cat-pagination--total">{{total}}</span>
        </span>
        <cc-icon-default icon="icon-nextPage" 
            :disabled="value === total" 
            @click="nextClick">
        </cc-icon-default>
    </div>
</template>
<style lang="scss">
    .cat-pagination {
        width: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:0;
        cursor: pointer;
        .cat-pagination-page{
            display: inline-block;
            .cat-pagination--total,
            .cat-cat-pagination-line {
                color: $--pagination-color;
                font-size: $--pagination-font-size;
            }
            .cat-pagination--current {
                color: $--pagination-color-current;
                font-size: $--pagination-font-size;
            }
        }   
    }

</style>
<script>
    import CcIconDefault from '@packages/iconDefault/src/iconDefault.vue';
    export default {
        name: 'CcPagination',
        components: {
            CcIconDefault
        },
        props: {
            // 总条目数
            total: {
                type: Number,
                default: 0,
            },
            //当前页
            value: {
                type: Number,
                default: 1,
            },
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
            preClick() {
                if (this.value === 1) {
                    return;
                }
                let page = parseInt(this.value) - 1;
                this.$emit('input', page);
            },
            nextClick() {
                if(this.value === this.total) {
                    return;
                }
                let page = parseInt(this.value) + 1;
                this.$emit('input', page);
            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>