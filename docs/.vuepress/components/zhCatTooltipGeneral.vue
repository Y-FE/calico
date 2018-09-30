
<template>
    <code-container style="padding: 0 100px 20px 100px;">
        <cc-row class="doc-top" justify="center">
            <cc-tooltip content="top提示 -- 上" direction="top">
                <cc-button type="default">上 上 上</cc-button>
            </cc-tooltip>
        </cc-row>
        <cc-row justify="space-between" align="center">
            <cc-row class="doc-top">
                <cc-tooltip content="top提示 -- 左" direction="left">
                    <cc-button type="default">左 左 左</cc-button>
                </cc-tooltip>
            </cc-row>
            <cc-row class="doc-top" justify="flex-end">
                <cc-tooltip content="top提示 -- 右" direction="right">
                    <cc-button type="default">右 右 右</cc-button>
                </cc-tooltip>
            </cc-row>
        </cc-row>
        <cc-row class="doc-top" justify="center">
            <cc-tooltip content="top提示 -- 下" direction="bottom">
                <cc-button type="default">下 下 下</cc-button>
            </cc-tooltip>
        </cc-row>
    </code-container>
</template>
