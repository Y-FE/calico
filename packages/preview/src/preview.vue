<template>
    <cc-row align="center"
        class="cat-preview" 
        :class="active ? 'cat-preview--active': ''">
        <div class="cat-preview-operate-num">
            <div class="cat-preview-num--self">{{order}}</div>
            <div class="cat-preview-operate-delete">
                <slot></slot>
            </div>
        </div>
        <div class="cat-preview-operate-box"
            @click="select(order)">
            <slot name="content">
               
            </slot>
            <template v-if="operate">
                <cc-preview-operate 
                    @delete-item="deleteItem"
                    @change-order="changeOrder"
                    class="cat-preview-operate" 
                    v-if="active">
                </cc-preview-operate>
            </template>
        </div>
    </cc-row>
</template>
<style lang="scss">
    .cat-preview {
        width: $--preview-width;
        height: $--preview-height;
        background: $--preview-background-color;
        transition: $--transition-base;
        .cat-preview-operate-box {
            width: $--preview-img-width;
            height: $--preview-img-height;
            position: relative;
            background: $--preview-background-color;
            box-shadow: $--preview-shadow;
            cursor: pointer;
            .cat-preview-operate {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }
            .cat-preview-operate-img {
                width: 100%;
            }
        }
        &:hover {
            background: $--preview-background-color-active;
        }
    }
    .cat-preview-operate-num {
        width: 25px;
        height: $--preview-img-height;
        text-align: center;
        position: relative;
        .cat-preview-num--self {
            color: $--preview-color;
            font-size: $--preview-font-size;
        }
        .cat-preview-operate-delete {
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            top: 50%;
            transform: translateY(-50%);
            color: $--preview-color;
            font-size: $--preview-font-size;
            cursor: pointer;
        }
    }
    .cat-preview--active {
        background: $--preview-background-color-active;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 2px;
            height: $--preview-height;
            background: $--preview-line-active; 
        } 
    }
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    import CcPreviewOperate from '@packages/previewOperate/src/previewOperate.vue';
    export default {
        name: 'CcPreview',
        components: {
            CcPreviewOperate,
            ccRow
        },
        props: {
            // 激活状态
            active: {
                type: Boolean,
                default: false,
            },
            //operate区是否hover出现
            operate: {
                type: Boolean,
                default: false,
            },
            // 序号
            order: {
                type: Number | String,
                default: 0,
            },
            //图片路径
            imgSrc: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                isOperate: false
            }
        },
        computed: {
           
        },
        watch: {
            
        },
        methods: {
            deleteItem() {
                if (!this.operate) {
                    return;
                } else {
                    this.$emit('delete-item');
                }
            },
            changeOrder(direction) {
                // direction: up / down
                if (!this.operate) {
                    return;
                } else {
                    this.$emit('change-order', direction);
                }
            },
            select(order){
                var page = order - 1;
                this.$emit('select', page);
                if(this.operate){
                    this.isOperate = true;
                }
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