<template>
    <table class="doc-table">
        <thead>
            <tr>
                <th v-for="(item, index) in list">
                    {{item[type]}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
    /*表格样式*/
    .doc-table{
        width: 100%;
        border: none;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -o-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        display: table!important;
    }
    .doc-table td{
    	border-bottom: 1px solid #eee;
    	padding: 0 10px;
    	vertical-align: middle;
    }
    .doc-table th{
    	border-bottom: 1px solid #eee;
    	padding: 0 10px;
    	vertical-align: middle;
        font-weight: 400;
        /*右上*/
        border-top-right-radius: 4px;
        /*左上*/
        border-top-left-radius: 4px;
    }
    .doc-table>thead>tr{
    	background-color: #f7f7f7;
    	font-size: 14px;
    	color:#1a3e51;
    	font-weight: 400;
    }
    .doc-table>tbody>tr{
    	font-size: 14px;
    	color:#666666;
    }
    .doc-table tr{
    	height:44px;
    }
    .doc-table>tbody>tr:nth-child(even) {
    background: #fff;
	}
	.doc-table>tbody>tr:nth-child(even):hover {
    background-color: #eff6fa;
	}
	.doc-table>tbody>tr:nth-child(odd) {
    background: #ffffff;
	}
	.doc-table>tbody>tr:nth-child(odd):hover {
    background-color: #eff6fa;
	}
	.doc-table>tbody>tr:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
	}
	.doc-table-link{
		font-size: 14px;
		color:#18a2ea;
	}
	.doc-table-link:hover{
		font-size: 14px;
		color:#138fd0;
	}
	.doc-table-link:active{
		font-size: 14px;
		color:#0a7eba;
	}
</style>
<script>
    export default {
        name: 'codeTable',
        components: {
        },
        props: {
            type: {
                type: String,
                default: 'zh',
            },
            thList: {
                type: String,
                default: 'attrNameList',
            }
        },
        data() {
            return {
                attrNameList: [
                    {zh: '参数', en: 'Attribute'},
                    {zh: '说明', en: 'Description'},
                    {zh: '类型', en: 'Type'},
                    {zh: '可选值', en: 'Accepted Values'},
                    {zh: '默认值', en: 'Default'},
                ],
                eventList: [
                    {zh: '事件名称', en: 'Event Name'},
                    {zh: '说明', en: 'Description'},
                    {zh: '回调参数', en: 'Parameters'},
                ],
            }
        },
        computed: {
            list() {
                return this[this.thList];
            }
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>