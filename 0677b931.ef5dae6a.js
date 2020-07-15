(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(153)),i=a(155),c=a(157),l={id:"component-drawer-layout",title:"Drawer Layout",sidebar_label:"DrawerLayout"},d={id:"component-drawer-layout",title:"Drawer Layout",description:"This is a cross-platform replacement for React Native's DrawerLayoutAndroid component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to React Native docs for the detailed usage for standard parameters.",source:"@site/docs/component-drawer-layout.mdx",permalink:"/react-native-gesture-handler/docs/next/component-drawer-layout",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/component-drawer-layout.mdx",version:"next",sidebar_label:"DrawerLayout",sidebar:"docs",previous:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/next/component-touchables"},next:{title:"Contributing",permalink:"/react-native-gesture-handler/docs/next/contributing"}},s=[{value:"Usage:",id:"usage",children:[]},{value:"Properties:",id:"properties",children:[{value:"<code>drawerType</code>",id:"drawertype",children:[]},{value:"<code>edgeWidth</code>",id:"edgewidth",children:[]},{value:"<code>hideStatusBar</code>",id:"hidestatusbar",children:[]},{value:"<code>statusBarAnimation</code>",id:"statusbaranimation",children:[]},{value:"<code>overlayColor</code>",id:"overlaycolor",children:[]},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>children</code>",id:"children",children:[]}]},{value:"Example:",id:"example",children:[]}],b={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a cross-platform replacement for React Native's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"DrawerLayoutAndroid")," component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"React Native docs")," for the detailed usage for standard parameters."),Object(o.b)("h2",{id:"usage"},"Usage:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DrawerLayout")," component isn't exported by default from the ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';\n")),Object(o.b)("h2",{id:"properties"},"Properties:"),Object(o.b)("p",null,"On top of the standard list of parameters DrawerLayout has an additional set of attributes to customize its behavior. Please refer to the list below:"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"drawertype"},Object(o.b)("inlineCode",{parentName:"h3"},"drawerType")),Object(o.b)("p",null,"possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"front"),", ",Object(o.b)("inlineCode",{parentName:"p"},"back")," or ",Object(o.b)("inlineCode",{parentName:"p"},"slide")," (default is ",Object(o.b)("inlineCode",{parentName:"p"},"front"),"). It specifies the way the drawer will be displayed. When set to ",Object(o.b)("inlineCode",{parentName:"p"},"front")," the drawer will slide in and out along with the gesture and will display on top of the content view. When ",Object(o.b)("inlineCode",{parentName:"p"},"back")," is used the drawer displays behind the content view and can be revealed with gesture of pulling the content view to the side. Finally ",Object(o.b)("inlineCode",{parentName:"p"},"slide")," option makes the drawer appear like it is attached to the side of the content view; when you pull both content view and drawer will follow the gesture."),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"slide"),":"),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(i.a)("gifs/drawer-slide.gif"),width:"280"})),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"front"),":"),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(i.a)("gifs/drawer-front.gif"),width:"280"})),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"back"),":"),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(i.a)("gifs/drawer-back.gif"),width:"280"})),Object(o.b)("hr",null),Object(o.b)("h3",{id:"edgewidth"},Object(o.b)("inlineCode",{parentName:"h3"},"edgeWidth")),Object(o.b)("p",null,"number, allows for defining how far from the edge of the content view the gesture should activate."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"hidestatusbar"},Object(o.b)("inlineCode",{parentName:"h3"},"hideStatusBar")),Object(o.b)("p",null,"boolean, when set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," Drawer component will use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html"}),"StatusBar"),' API to hide the OS status bar whenever the drawer is pulled or when its in an "open" state.'),Object(o.b)("hr",null),Object(o.b)("h3",{id:"statusbaranimation"},Object(o.b)("inlineCode",{parentName:"h3"},"statusBarAnimation")),Object(o.b)("p",null,"possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"slide"),", ",Object(o.b)("inlineCode",{parentName:"p"},"none")," or ",Object(o.b)("inlineCode",{parentName:"p"},"fade")," (defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"slide"),"). Can be used when ",Object(o.b)("inlineCode",{parentName:"p"},"hideStatusBar")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and will select the animation used for hiding/showing the status bar. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html#statusbaranimation"}),"StatusBar")," documentation for more details."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"overlaycolor"},Object(o.b)("inlineCode",{parentName:"h3"},"overlayColor")),Object(o.b)("p",null,"color (default to ",Object(o.b)("inlineCode",{parentName:"p"},'"black"'),") of a semi-transparent overlay to be displayed on top of the content view when drawer gets open. A solid color should be used as the opacity is added by the Drawer itself and the opacity of the overlay is animated (from 0% to 70%)."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"rendernavigationview"},Object(o.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(o.b)("p",null,"function. This attribute is present in the standard implementation already and is one of the required params. Gesture handler version of DrawerLayout make it possible for the function passed as ",Object(o.b)("inlineCode",{parentName:"p"},"renderNavigationView")," to take an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened). This can be used by the drawer component to animated its children while the drawer is opening or closing."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"children"},Object(o.b)("inlineCode",{parentName:"h3"},"children")),Object(o.b)("p",null,"component or function. Children is a component which is rendered by default and is wrapped by drawer. However, it could be also a render function which takes an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened) is the same way like ",Object(o.b)("inlineCode",{parentName:"p"},"renderNavigationView")," prop."),Object(o.b)("h2",{id:"example"},"Example:"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/horizontalDrawer/index.js"}),"drawer example")," from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'class Drawerable extends Component {\n  renderDrawer = () => {\n    return (\n      <View>\n        <Text>I am in the drawer!</Text>\n      </View>\n    );\n  };\n\n  render() {\n    return (\n      <View style={{ flex: 1 }}>\n        <DrawerLayout\n          drawerWidth={200}\n          drawerPosition={DrawerLayout.positions.Right}\n          drawerType="front"\n          drawerBackgroundColor="#ddd"\n          renderNavigationView={this.renderDrawer}>\n          <View>\n            <Text>Hello, it\'s me</Text>\n          </View>\n        </DrawerLayout>\n      </View>\n    );\n  }\n}\n')))}p.isMDXComponent=!0},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?r.a.createElement(h,c(c({ref:t},d),{},{components:a})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},154:function(e,t,a){"use strict";var n=a(0),r=a(34);t.a=function(){return Object(n.useContext)(r.a)}},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(154);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n);const o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=({children:e})=>r.a.createElement("div",{style:o.container},n.Children.map(e,e=>Object(n.cloneElement)(e,{...e.props.style,style:o.img})))}}]);