<template>
<div>
    <cc-button>按钮1</cc-button>
        <cc-button type="primary" disabled  @click="buttonClick">按钮2</cc-button>
        <cc-button type="default" @click="buttonClick">按钮3</cc-button>
        <cc-button type="default" disabled>按钮4</cc-button>
        <cc-button type="default" shape="round">按钮5</cc-button>
        <br>
        <cc-aside></cc-aside>
        <cc-tool-item icon="icon-setting">
            第一页
        </cc-tool-item>
        <cc-tool-item icon="icon-setting" disabled>
            第二页
        </cc-tool-item>

        <cc-tool-item icon="icon-setting" active>
            第三页
        </cc-tool-item>
        <br>
        <cc-menu-item icon="icon-ReportErrors" color="#FF336A">
            报错
        </cc-menu-item>
        <cc-menu-item icon="icon-chat" color="#0077FF">
            聊天
        </cc-menu-item>
        <cc-menu-item icon="icon-speaker" color="#27D2D0">
            扬声器
        </cc-menu-item>
        <cc-menu-item icon="icon-Microphone" color="#FFA250">
            麦克风
        </cc-menu-item>
        <cc-menu-item icon="icon-purview" color="#403BEF" disabled>
            板书权限
        </cc-menu-item>
        <br>
        <cc-icon-block icon="icon-CenterAlignment"></cc-icon-block>
        <cc-icon-block icon="icon-CenterAlignment" active></cc-icon-block>
        <br><br>
        <cc-icon-circle icon="icon-increaseTime"></cc-icon-circle>
        <br><br>
        <cc-icon-default icon="icon-nextPage"></cc-icon-default>
        <cc-icon-default icon="icon-nextPage" disabled></cc-icon-default>

        <br><br>
        <cc-icon-grey-block icon="icon-addCourseware"></cc-icon-grey-block>
        <cc-icon-grey-block icon="icon-addCourseware" disabled></cc-icon-grey-block>
        <br><br>
       
        <cc-radio-group v-model="radio3">
            <cc-radio-button value="77" >画笔</cc-radio-button>
            <cc-radio-button value="橡皮">77777</cc-radio-button>
            <cc-radio-button value="喷漆" label="大象"></cc-radio-button>
            <cc-radio-button value="放大镜"></cc-radio-button>
        </cc-radio-group>
        <cc-switch v-model="mm"  style="margin-top: 20px;"></cc-switch>

        <!-- <cc-row 
            class="cat-message-body"
            justify="space-between"
            aligin="center">
            <p>66</p>
            <p>77</p>
        </cc-row> -->
        <br><br>
        <cc-color-select v-model="color" title="画笔颜色">
            <cc-color-option v-for="(item, index) in colorList" :key="index" :value="item"></cc-color-option>
        </cc-color-select>

        <div style="margin-top: 100px;">
            <cc-pagination  v-model="currentPage" :total="4"></cc-pagination>
        </div>
        <cc-line-select v-model="line" title="边框颜色">
            <cc-line-option v-for="(item, index) in colorList" :key="index" :value="item"></cc-line-option>
        </cc-line-select>

        <cc-select v-model="fontSize" title="字号" style="margin-left: 60px;">
            <cc-option v-for="(item, index) in fontList" :key="index" :value="item">
            </cc-option>
        </cc-select>

        <cc-select v-model="course" title="课件" style="margin-left: 60px;">
            <cc-option 
                v-for="(item, index) in courseList" 
                :key="index" 
                :value="item.val" 
                :label="item.name">
                <i slot="right" class="iconfont icon-delete"></i>
            </cc-option>
        </cc-select>
        <br><br>
        <cc-input-number v-model="number1" :max="6" :min="1" title="粗细"></cc-input-number>
        <cc-input-number v-model="number2"  title="旋转"></cc-input-number>
        <cc-tooltip theme="light" :show="mm">
            <p>我是一个粉刷匠</p>
        </cc-tooltip>
        <cc-tooltip style="margin-top: 100px;" @click.native="mm = !mm">
            <p>我是一个粉刷匠</p>
        </cc-tooltip>
        <cc-float-panel>
            lull
        </cc-float-panel>

        <!-- 写法和radiobutton一样, 希望和radiobutton用同样的参数 -->
        <cc-nav v-model="nav">
            <cc-nav-item  label="课件导航" value="课件导航">课件导航</cc-nav-item>
            <cc-nav-item  label="动画风格" value="动画风格">动画风格</cc-nav-item>
        </cc-nav>
        <br><br>
        <cc-preview-operate></cc-preview-operate>
        <div style="margin:30px;">
            <cc-preview v-for="(item, index) in courseList"
                style="margin-bottom:20px;" 
                :order="(index+1)" 
                :key="index" 
                @select="changeNow"
                operate                
                :active="index === nowIndex">
                <i class="iconfont icon-deletePage"></i>
            </cc-preview>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default {
        name: 'App',
        components: {
        },
        props: {},
        data() {
            return {
                    test: 'ok',
                    radio3: '橡皮',
                    color: '#FF4040',
                    line: '#18A2EA',
                    currentPage: 1,
                    fontSize: 12,
                    course: 1,
                    total: 4,
                    number1: 2,
                    number2: 30,
                    nav: '课件导航',
                    colorList:[
                        '#18A2EA','#FFB804','#FF4040','#2D2D2D','#009E4A','transparent'
                    ],
                    fontList:[12,14,16,18,20,22],
                    courseList:[
                        {val: 1, name: "课件1"},
                        {val: 2, name: "课件2"},
                        {val: 3, name: "课件3"},
                    ],
                    mm: true,
                    nowIndex: 0
                }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            drop() {
                    console.log('drop');
                },
                droped() {
                    console.log('droped');
                },
                startdrag(e) {
                    e.dataTransfer.setData('item', 'ok')
                },
                preClick(data){
                    this.currentPage = data;
                },
                nextClick(data){
                    this.currentPage = data;    
                },
                buttonClick(data){
                    console.log(data);
                },
                changeNow(data){
                    this.nowIndex = data;
                }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.$message('000');
        }
    }
</script>