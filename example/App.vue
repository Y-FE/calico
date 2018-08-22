<template>
<div style="padding: 50px;">
    <cc-radio-group v-model="hori" title="形状">
        <cc-horizontal-radio  value="77">
            <i class="iconfont icon-triangle"></i>
        </cc-horizontal-radio>
        <cc-horizontal-radio  :value="1">
            <i class="iconfont icon-rectangle"></i>
        </cc-horizontal-radio>
    </cc-radio-group>
    <cc-radio-group v-model="hori" column>
        <cc-vertical-radio  value="77" label="我是坏蛋">
            <i class="iconfont icon-triangle"></i>
        </cc-vertical-radio>
        <cc-vertical-radio  :value="1">
            <i class="iconfont icon-rectangle"></i>
        </cc-vertical-radio>
    </cc-radio-group>
    <!-- <cc-horizontal-radio></cc-horizontal-radio> -->
    <cc-aside style="height: 800px;">
    </cc-aside>
    <div style="margin: 100px 50px; border: 1px solid #000; width: 500px; height: 500px; padding: 20px;">
        <cc-row         
            justify="space-between"
            align="center">
            <cc-row justify="center" align="center" 
                style="height: 62px"
                v-croup:tool.orign="{value: index}"
                v-croup:tool.item="{fun: dropSelf, value: index}"
                draggable="true"
                :style="{'width': `calc(100% / ${toolItemList.length})`}"
                v-for="(item, index) in toolItemList"                 
                :key="index">
                <cc-tool-item 
                    :icon="item.icon">
                    {{item.name}}
                </cc-tool-item>
            </cc-row>
            <cc-tool-item icon="icon-setting"  v-croup:tool.orign="{value: toolItemList.length}"  @click="showDraggable = !showDraggable"></cc-tool-item>
        </cc-row>
        <cc-flex-modal :show="showDraggable" top="310" left="135" width="254">
            <cc-row wrap="wrap" aglin="center" justify="space-between">
                <cc-row 
                    v-croup:tool.item="{fun: dropTool, value: item}"
                    :draggable="!toolItemList.some(i => i.name === item.name) ? true : false"
                    v-for="(item, index) in toolItemListDefault" 
                    :style="{'width': `calc(100% / 4`, 'margin-top': index > 3 ? '20px' : ''}"
                    justify="center" align="center" 
                    class="cat-item"
                    :key="index">
                    <cc-tool-item 
                        :disabled="toolItemList.some(i => i.name === item.name) ? true : false"
                        :icon="item.icon">
                        {{item.name}}
                    </cc-tool-item>
                </cc-row>
                <!-- <cc-tool-item 
                    class="cat-item"
                    v-for="(item, index) in toolItemListDefault" :key="index" :icon="item.icon">
                    {{item.name}}
                </cc-tool-item> -->
            </cc-row>
        </cc-flex-modal>
    </div>
    <cc-button>按钮1</cc-button>
        <cc-button type="primary" disabled  @click="buttonClick">按钮2</cc-button>
        <cc-button type="default" @click="buttonClick">按钮3</cc-button>
        <cc-button type="default" disabled>按钮4</cc-button>
        <cc-button type="default" shape="round">按钮5</cc-button>
        <br>
        <cc-aside></cc-aside>
        <cc-tool-item-layout>
            <cc-switch slot="tool" v-model="mm"></cc-switch>
            第一页
        </cc-tool-item-layout>
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
        
        <br>
        <cc-icon-block icon="icon-center-alignment"></cc-icon-block>
        <cc-icon-block icon="icon-center-alignment" active></cc-icon-block>
        <br><br>
        <cc-icon-circle icon="icon-increase-time"></cc-icon-circle>
        <br><br>
        <cc-icon-default icon="icon-nextpage"></cc-icon-default>
        <cc-icon-default icon="icon-nextpage" disabled></cc-icon-default>

        <br><br>
        <cc-icon-grey-block icon="icon-add-courseware"></cc-icon-grey-block>
        <cc-icon-grey-block icon="icon-add-courseware" disabled></cc-icon-grey-block>
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
        </cc-row>  -->
        <br><br>
        <cc-color-select v-model="color" title="画笔颜色">
            <cc-color-option v-for="(item, index) in colorList" :key="index" :value="item"></cc-color-option>
        </cc-color-select>

        <div style="margin-top: 100px;">
            <cc-pagination  v-model="currentPage" :total="4"></cc-pagination>
        </div>

        <cc-vertical-group>
        <cc-line-select v-model="line" title="线条颜色">
            <cc-line-option v-for="(item, index) in colorList" :key="index" :value="item"></cc-line-option>
        </cc-line-select>

        <cc-select v-model="fontSize" title="字号">
            <cc-option v-for="(item, index) in fontList" :key="index" :value="item">
            </cc-option>
        </cc-select>
        </cc-vertical-group>

        <cc-vertical-group>
        <cc-select v-model="course"  style="margin-left: 60px;">
            <cc-option 
                v-for="(item, index) in courseList" 
                :key="index" 
                :value="item.val" 
                :label="item.name">
                <i slot="right" class="iconfont icon-delete"></i>
            </cc-option>
        </cc-select>
        <cc-input-number v-model="number1" :max="6" :min="1" title="大小"></cc-input-number>
        <cc-input-number v-model="number2"  title="旋转"></cc-input-number>
        </cc-vertical-group>
        <cc-tooltip theme="light" :show="mm" content="路沙发客服敬爱的">
            <p>我是一</p>
        </cc-tooltip>
        <cc-tooltip style="margin-top: 100px;" @click.native="mm = !mm">
            <p>我是一个粉刷匠</p>
        </cc-tooltip>
        <cc-float-panel :show="true">
            <p>我是一个骚气的可拖拽</p>
        </cc-float-panel>

         <!-- 写法和radiobutton一样, 希望和radiobutton用同样的参数  -->
        <cc-nav v-model="nav" style="margin-top:37px;">
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
        <p @click="showmodal = !showmodal">88888</p>
        <cc-flex-modal :show="showmodal">
            7766
        </cc-flex-modal>

        <!-- <cc-tooltip v-for="i in 6" :key="i" :content="'dd'+i">
            {{i}}
        </cc-tooltip> -->
        <cc-clock time="23"></cc-clock>
        <cc-clock time="46"></cc-clock>
        <br><br><br><br>
        <cc-scale-area
            :outWidth="scaleOutWidth"
            :outHeight="scaleOutHeight"
        ></cc-scale-area>
    
    
    <cc-side-panel>
        <cc-menu-item icon="icon-ReportErrors" color="#FF336A">
            报错
        </cc-menu-item>
        <cc-menu-item icon="icon-chat" color="#0077FF">
            聊天
        </cc-menu-item>
        <cc-menu-item icon="icon-speaker" color="#27D2D0">
            扬声器
        </cc-menu-item>
        <cc-menu-item icon="icon-microphone" color="#FFA250">
            麦克风
        </cc-menu-item>
        <cc-menu-item icon="icon-purview" color="#403BEF" disabled>
            板书权限
        </cc-menu-item>
    </cc-side-panel>
    <cc-main></cc-main>
    </div>
</template>
<style>
    .cat-item + .cat-item {
        /* margin-left: 20px; */
        /* margin-top: 20px; */
    }
    .move-list-move {
        transition: transform .8s;
    }
</style>
<script>
    export default {
        name: 'App',
        components: {
        },
        props: {},
        data() {
            return {
                hori: 1,
                //----------------------
                showDraggable: true,
                toolItemListDefault: [
                    {icon: 'icon-word', name: '文字'},
                    {icon: 'icon-picture', name: '图片'},
                    {icon: 'icon-shape', name: '形状'},
                    {icon: 'icon-line', name: '直线'},
                    {icon: 'icon-paint-pen', name: '画笔'},
                    {icon: 'icon-exercises', name: '题目'},
                    {icon: 'icon-theme', name: '知识点'},
                    {icon: 'icon-animation', name: '动画'},
                ],
                toolItemList: [
                    {icon: 'icon-word', name: '文字'},
                    {icon: 'icon-picture', name: '图片'},
                    {icon: 'icon-shape', name: '形状'},
                    // {icon: 'icon-line', name: '直线'},
                    // {icon: 'icon-paint-pen', name: '画笔'},
                    // {icon: 'icon-exercises', name: '题目'},
                    // {icon: 'icon-theme', name: '知识点'},
                    {icon: 'icon-animation', name: '动画'},
                ],
                showmodal: false,
                //-----------------------
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
                nowIndex: 0,

                scaleOutWidth: 1366,
                scaleOutHeight: 768
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            dropTool(itemValue, orignValue) {
                if (orignValue !== undefined) {
                     this.toolItemList.splice(orignValue, 0, itemValue);
                }
            },
            dropSelf(itemValue, orignValue) {
                if (orignValue === undefined) {
                    this.toolItemList = this.toolItemList.filter((i, index) => index !== itemValue);
                    return;
                };
                let item = this.toolItemList[itemValue];
                this.toolItemList = this.toolItemList.filter((i, index) => index !== itemValue);
                this.toolItemList.splice(orignValue, 0, item);
            },
            mmd() {
                console.log(88888);
            },
            // -----------------
            drop() {
                console.log('drop');
            },
            droped(val) {
                console.log(val);
                console.log('droped');
            },
            startdrag(e) {
                console.log(e);
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

            this.scaleOutWidth = window.innerWidth-200;
            this.scaleOutHeight = window.innerHeight-200;
            window.onresize = () => {
                this.scaleOutWidth = window.innerWidth-200;
                this.scaleOutHeight = window.innerHeight-200;
            }
        }
    }
</script>