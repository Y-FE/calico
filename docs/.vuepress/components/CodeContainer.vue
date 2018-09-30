<template>
    <div class="code-container">
        <slot></slot>
    </div>
</template>
<style>
    h2 {
        border-bottom: none !important;
    }
    table {
        display: table !important;
        width: 100%;
        border: none;
        border-radius: 4px;
        display: table!important;
        border: 1px solid #eee;
    }
    th, td {
        border: none;
    }
    table td{
    	border-bottom: 1px solid #eee;
    	padding: 0 10px;
    	vertical-align: middle;
    }
    table th{
    	border-bottom: 1px solid #eee;
    	padding: 0 10px;
    	vertical-align: middle;
        font-weight: 400;
        /*右上*/
        border-top-right-radius: 4px;
        /*左上*/
        border-top-left-radius: 4px;
    }
    table>thead>tr{
    	background-color: #f7f7f7;
    	font-size: 14px;
    	color:#1a3e51;
    	font-weight: 400;
    }
    table>tbody>tr{
    	font-size: 14px;
    	color:#666666;
    }
    table tr{
    	height:44px;
    }
    table>tbody>tr:nth-child(even) {
    background: #fff;
	}
	table>tbody>tr:nth-child(even):hover {
    background-color: #eff6fa;
	}
	table>tbody>tr:nth-child(odd) {
    background: #ffffff;
	}
	table>tbody>tr:nth-child(odd):hover {
    background-color: #eff6fa;
	}
	table>tbody>tr:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
	}
    .doc-des {
        font-size: 16px;
        color: #333;
        transition: all .3s;
    }
    .doc-btn {
        width: 165px;

    }
    .doc-top {
        width: 100%;

    }
</style>
<style scoped>
    .code-container {
        margin-top: 20px;
        border: 1px solid #eee;
        padding: 0 20px 20px 20px;
        border-radius: 4px;
    }
    .code-container > div {
        margin-top: 20px;
    }
</style>
<script>
    export default {
        name: 'CodeContainer',
    }
</script>