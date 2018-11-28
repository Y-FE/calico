<template>
    <cc-row 
        justify="space-between" 
        align="center"  
        class="cat-pagination" 
        :class="[column ? 'cat-pagination--column' : '', `cat-pagination--${type}`]">
        <cc-icon-default :icon="type === 'primary' ? 'icon_calico-last-page' : 'icon_calico-arrow-left'" 
            :size="size"
            :disabled="value === 1"
            @click="preClick">
        </cc-icon-default>
        <span class="cat-pagination-page" v-if="!column">
            <span class="cat-pagination--current">{{value}}</span>
            <span class="cat-cat-pagination-line">/</span>
            <span class="cat-pagination--total">{{total}}</span>
        </span>
        <cc-icon-default :icon="type === 'primary' ? 'icon_calico-next-page' : 'icon_calico-arrow-right'"
            :size="size"
            :disabled="value === total" 
            @click="nextClick">
        </cc-icon-default>
    </cc-row>
</template>
<style lang="scss">
    .cat-pagination {
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
    .cat-pagination--column {
        transform: rotate(90deg);
    }
    .cat-pagination--default {
        width: 90px;
    }
    .cat-pagination--primary {
        width: 90px;
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    import CcIconDefault from '@packages/iconDefault/src/iconDefault.vue';
    export default {
        name: 'CcPagination',
        components: {
            CcIconDefault,
            ccRow
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
            // 排列
            column: {
                type: Boolean,
                default: false
            },
            // 分页类型 default  primary
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'normal'
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
                this.$emit('change-page');
            },
            nextClick() {
                if(this.value === this.total) {
                    return;
                }
                let page = parseInt(this.value) + 1;
                this.$emit('input', page);
                this.$emit('change-page');
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