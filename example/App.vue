<template>
<div>
    <!-- <div style="margin: 50px;">
        <cc-select v-model="fontSize" title="字号" size="large">
            <cc-option v-for="(item, index) in fontList" :key="index" :value="item">
            </cc-option>
        </cc-select>
        <cc-input title="999" size="large" v-model="largeInput" placeholder="请输入666">

        </cc-input>
        <cc-textarea title="dd" v-model="largeInput" placeholder="请输入666">

        </cc-textarea>
    </div> -->
    <cc-progress :percent="percent" style="margin: 20px">

    </cc-progress>
    <cc-switch v-model="mm" disabled></cc-switch>
    <cc-switch v-model="mm"></cc-switch>
    <cc-modal 
        :show.sync="showN"
        width="820"
        title="我是一个分数字键">
        <template slot="body">
            <cc-course-radio-group v-model="courseRadio">
                <cc-course-radio v-for="i in 6" :key="i" :value="i">
                    我是一个fhuipqhfuie qhfiqehfiqwep hfiqpejfioqwepjfioqepjfiqowefjoqwepfjqio wefhqweopfhiqohfiopqwe fhqiwofhq wfhqei fhqeiofhqwe f
                </cc-course-radio>
            </cc-course-radio-group>
        </template>
    </cc-modal>
    <cc-button @click="showN = true">
        展示模态框
    </cc-button>
    <cc-button @click="percent = percent === 80 ? 50 : 80">
        进度条修改
    </cc-button>
    <cc-checkbox-group v-model="horiArr" title="多选">
        <cc-horizontal-checkbox  value="77">
            <i class="iconfont icon-triangle"></i>
        </cc-horizontal-checkbox>
        <cc-horizontal-checkbox  :value="1">
            <i class="iconfont icon-rectangle"></i>
        </cc-horizontal-checkbox>
    </cc-checkbox-group>
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
    <cc-aside style="height: 400px;">
        <div slot="body">
            <cc-preview v-for="(item, index) in courseList"
                :order="(index+1)" 
                :key="index" 
                @select="changeNow"
                operate                
                :active="index === nowIndex">
                <i class="iconfont icon-delete-page"></i>
                <div slot="content">
                </div>
            </cc-preview>
        </div>
    </cc-aside>
    <div style="margin: 100px 50px; border: 1px solid #000; width: 500px; height: 500px; padding: 20px;">
        <cc-row         
            justify="space-between"
            align="center">
            <cc-row justify="center" align="center" 
                style="height: 62px"
                v-croup:tool.orign="{value: index}"
                v-croup:tool.item="{fun: dropSelf, value: index}"
                :draggable="showDraggable"
                :style="{'width': `calc(100% / ${toolItemList.length})`}"
                v-for="(item, index) in toolItemList"                 
                :key="index">
                <cc-tool-item 
                    :icon="item.icon">
                    {{item.name}}
                </cc-tool-item>
            </cc-row>
            <cc-icon-nano icon="icon-setting" 
                :active="showDraggable" 
                v-croup:tool.orign="{value: toolItemList.length}"  
                @click="showDraggable = !showDraggable">
            </cc-icon-nano>
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
        <cc-tool-item icon="icon-setting" state="danger">
            第三页
        </cc-tool-item>
        <cc-tool-item icon="icon-setting" state="success">
            第三页
        </cc-tool-item>
        <cc-tool-item-horizal icon="icon-setting">
            第一页
        </cc-tool-item-horizal>
        <cc-tool-item-horizal icon="icon-setting" disabled>
            第二页
        </cc-tool-item-horizal>

        <cc-tool-item-horizal icon="icon-setting" active>
            第三页
        </cc-tool-item-horizal>
        <cc-tool-item-horizal icon="icon-setting" state="danger">
            第三页
        </cc-tool-item-horizal>
        <cc-tool-item-horizal icon="icon-setting" state="success">
            第三页
        </cc-tool-item-horizal>

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
        <div style="margin-top: 80px;">
            <cc-pagination column v-model="currentPage" :total="4"></cc-pagination>
        </div>
        <div style="margin-top: 100px;">
            <cc-pagination  v-model="currentPage" :total="4"></cc-pagination>
        </div>

        <cc-line-select v-model="line" title="线条颜色">
            <cc-line-option v-for="(item, index) in colorList" :key="index" :value="item"></cc-line-option>
        </cc-line-select>

        <cc-select v-model="fontSize" title="字号">
            <cc-option v-for="(item, index) in fontList" :key="index" :value="item">
            </cc-option>
        </cc-select>
        <cc-select v-model="course">
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
        <cc-tooltip theme="light" :show="mm" content="路沙发客服敬爱的">
            <p>我是一</p>
        </cc-tooltip>
        <cc-tooltip style="margin-top: 100px;" @click.native="mm = !mm">
            <p>我是一个粉刷匠</p>
        </cc-tooltip>
        
        <cc-popover width="182" style="margin-top: 100px;">
            <p slot="reference">我是popover --- hover</p>
            <div>这个一点也不好玩</div>
        </cc-popover>

        <cc-popover width="182" direction="bottom" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>这个一点也不好玩b</div>
        </cc-popover>
        <cc-popover width="182" direction="bottomStart" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>这个一点也不好玩bs</div>
        </cc-popover>
        <cc-popover width="182" direction="bottomStart" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>这个一点也不好玩bs</div>
        </cc-popover>
        <cc-popover width="182" direction="bottomEnd" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>这个一点也不好玩be</div>
        </cc-popover>
        <cc-popover width="182" direction="bottomEnd" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>这个一点也不好玩be</div>
        </cc-popover>
        <cc-popover width="182" direction="left" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>这个一点也不好玩l</div>
        </cc-popover>
        <cc-popover width="182" direction="left" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>这个一点也不好玩l</div>
        </cc-popover>
        <cc-popover width="182" direction="leftStart" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>这个一点也不好玩ls</div>
        </cc-popover>
        <cc-popover width="182" direction="leftStart" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>这个一点也不好玩ls</div>
        </cc-popover>
        <cc-popover width="182" direction="leftEnd" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>这个一点也不好玩le</div>
        </cc-popover>
        <cc-popover width="182" direction="leftEnd" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>这个一点也不好玩le</div>
        </cc-popover>
        <cc-popover offsetX="50" width="182" direction="right" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>右边</div>
        </cc-popover>
        <cc-popover width="182" direction="right" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>右边</div>
        </cc-popover>
        <cc-popover offsetX="50" width="182" direction="rightStart" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>右上</div>
        </cc-popover>
        <cc-popover width="182" direction="rightStart" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>右上</div>
        </cc-popover>
        <cc-popover offsetX="50" width="182" direction="rightEnd" :show="mm" style="margin-top: 100px;">
            <p style="width: 50px" slot="reference" @click="mm = !mm">我是popover --- click</p>
            <div>右下</div>
        </cc-popover>
        <cc-popover width="182" direction="rightEnd" :show="mm" style="margin-top: 100px;">
            <p slot="reference" @click="mm = !mm">我是popover --- clic我是popover --- clic我是popover --- clic</p>
            <div>右下</div>
        </cc-popover>

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
                @delete-item="deletePage('dd')"
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
        <cc-menu-item icon="icon-report-errors" color="#FF336A">
            报错
        </cc-menu-item>
        <cc-menu-item icon="icon-report-errors" close color="#FF336A">
            报错
        </cc-menu-item>
        <cc-menu-item icon="icon-report-errors" disabled color="#FF336A">
            报错
        </cc-menu-item>
    
    <cc-side-panel>
        <cc-menu-item icon="icon-report-errors" color="#FF336A">
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
                courseRadio: 1,
                largeInput: '',
                percent: 50,
                showN: true,
                hori: 1,
                horiArr: [],
                //----------------------
                showDraggable: false,
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
                color: 'rgba(0,0,0,0)',
                line: '#18A2EA',
                currentPage: 1,
                fontSize: 12,
                course: 1,
                total: 4,
                number1: 2,
                number2: 30,
                nav: '课件导航',
                colorList:[
                    '#18A2EA','#FFB804','#FF4040','#2D2D2D','#009E4A',''
                ],
                fontList:[12,14,16,18,20,22],
                courseList:[
                    {val: 1, name: "课件1"},
                    {val: 2, name: "课件2"},
                    {val: 3, name: "课件3"},
                    {val: 4, name: "课件1"},
                    {val: 5, name: "课件2"},
                    {val: 6, name: "课件3"},
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
            deletePage(name) {
                console.log(name);
            },
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
            let a = this.$message.success({
                message: 'wohh',
                showClose: true,
            });
            // this.$message.error({
            //     message: 'wohh',
            //     duration: 5000
            // });
            // let a = this.$message(876587);
            console.log(a);
            console.log('dd');
            setTimeout(function() {
                a.close();
            }, 8000);
            // this.$message.info('info');
            // this.$message.error('error');
            // this.$message.warning('warning');
            // this.$message.success('success');

            this.scaleOutWidth = window.innerWidth-200;
            this.scaleOutHeight = window.innerHeight-200;
            window.onresize = () => {
                this.scaleOutWidth = window.innerWidth-200;
                this.scaleOutHeight = window.innerHeight-200;
            }
        }
    }
</script>