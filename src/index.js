/* Automatically generated by './build/build-entry.js' */
import './css/index.scss';
import './css/reset.css';
import './css/animation.css';

import croup from './directives/croup';
import blur from './directives/blur';

import Aside from '../packages/aside';
import Button from '../packages/button';
import Clock from '../packages/clock';
import ColorOption from '../packages/colorOption';
import ColorSelect from '../packages/colorSelect';
import FlexModal from '../packages/flexModal';
import FloatPanel from '../packages/floatPanel';
import Grid from '../packages/grid';
import Header from '../packages/header';
import HeaderGroup from '../packages/headerGroup';
import IconBlock from '../packages/iconBlock';
import IconCircle from '../packages/iconCircle';
import IconDefault from '../packages/iconDefault';
import IconGreyBlock from '../packages/iconGreyBlock';
import Input from '../packages/input';
import InputNumber from '../packages/inputNumber';
import LineOption from '../packages/lineOption';
import LineSelect from '../packages/lineSelect';
import MenuItem from '../packages/menuItem';
import Message from '../packages/message';
import Nav from '../packages/nav';
import NavItem from '../packages/navItem';
import Option from '../packages/option';
import Pagination from '../packages/pagination';
import Popover from '../packages/popover';
import Preview from '../packages/preview';
import PreviewOperate from '../packages/previewOperate';
import RadioButton from '../packages/radioButton';
import RadioGroup from '../packages/radioGroup';
import Row from '../packages/row';
import ScaleArea from '../packages/scaleArea';
import Select from '../packages/select';
import SidePanel from '../packages/sidePanel';
import Switch from '../packages/switch';
import ToolItem from '../packages/toolItem';
import ToolItemLayout from '../packages/toolItemLayout';
import Tooltip from '../packages/tooltip';
import VerticalGroup from '../packages/verticalGroup';

const components = [
    Aside,
    Button,
    Clock,
    ColorOption,
    ColorSelect,
    FlexModal,
    FloatPanel,
    Grid,
    Header,
    HeaderGroup,
    IconBlock,
    IconCircle,
    IconDefault,
    IconGreyBlock,
    Input,
    InputNumber,
    LineOption,
    LineSelect,
    MenuItem,
    Nav,
    NavItem,
    Option,
    Pagination,
    Popover,
    Preview,
    PreviewOperate,
    RadioButton,
    RadioGroup,
    Row,
    ScaleArea,
    Select,
    SidePanel,
    Switch,
    ToolItem,
    ToolItemLayout,
    Tooltip,
    VerticalGroup
];

const install = function(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.use(Message);
    Vue.directive('croup', croup);
    Vue.directive('blur', blur);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

let calico = {
    version: '0.4.8',
    install,
    Aside,
    Button,
    Clock,
    ColorOption,
    ColorSelect,
    FlexModal,
    FloatPanel,
    Grid,
    Header,
    HeaderGroup,
    IconBlock,
    IconCircle,
    IconDefault,
    IconGreyBlock,
    Input,
    InputNumber,
    LineOption,
    LineSelect,
    MenuItem,
    Nav,
    NavItem,
    Option,
    Pagination,
    Popover,
    Preview,
    PreviewOperate,
    RadioButton,
    RadioGroup,
    Row,
    ScaleArea,
    Select,
    SidePanel,
    Switch,
    ToolItem,
    ToolItemLayout,
    Tooltip,
    VerticalGroup
};

export default calico