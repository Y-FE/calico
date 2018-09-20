<template>
    <textarea v-model="inputVal"
        :placeholder="placeholder"
        class="cat-textarea-body cat-textarea-default"
        :style="{'resize': resize ? '' : 'none', 'height': `${rows * 20 + 20}px`, width: `${width}px`}"
        @focus="focus"
        @blur="blur"
        @keyup.stop
        @keydown.stop>
        
    </textarea>
</template>
<style lang="scss">
    .cat-textarea-body {
        border-radius: $--input-radius;
        color: $--input-color;
        padding: 10px;
        font-size: $--input-font-size-large;
        line-height: $--line-height-textarea;
    }
    .cat-textarea-default {
        border: 1px solid $--input-border-color;
        &:hover {
            border:  1px solid $--input-border-color-hover;
        }
        &:focus {
            border:  1px solid $--input-border-color-active;
        }
    }
</style>
<script>
    export default {
        name: 'CcTextarea',
        components: {
        },
        props: {
            value: {
                type: String | Number,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            //normal, large
            resize: {
                type: Boolean,
                default: false
            },
            // 行数
            rows: {
                type: Number,
                default: 2
            },
            width: {
                type: String | Number,
                default: 100,
            }
        },
        data() {
            return {
            }
        },
        computed: {
            inputVal: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);                
                }
            }
        },
        watch: {
        },
        methods: {
            focus() {
                this.$emit('focus');
            },
            blur() {
                this.$emit('blur');
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