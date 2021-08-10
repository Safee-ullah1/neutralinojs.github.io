(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return u}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(i),m=r,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||a;return i?n.a.createElement(u,o(o({ref:t},s),{},{components:i})):n.a.createElement(u,o({ref:t},s))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},81:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return p}));var r=i(3),n=i(8),a=(i(0),i(101)),l={title:"Neutralino.filesystem"},o={unversionedId:"api/filesystem",id:"api/filesystem",isDocsHomePage:!1,title:"Neutralino.filesystem",description:"Neutralino.filesystem namespace contains methods for handling files.",source:"@site/docs/api/filesystem.md",slug:"/api/filesystem",permalink:"/docs/api/filesystem",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/filesystem.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.window",permalink:"/docs/api/window"},next:{title:"Neutralino.os",permalink:"/docs/api/os"}},c=[{value:"filesystem.createDirectory(CreateDirectoryOptions)",id:"filesystemcreatedirectorycreatedirectoryoptions",children:[{value:"CreateDirectoryOptions",id:"createdirectoryoptions",children:[]}]},{value:"filesystem.removeDirectory(RemoveDirectoryOptions)",id:"filesystemremovedirectoryremovedirectoryoptions",children:[{value:"RemoveDirectoryOptions",id:"removedirectoryoptions",children:[]}]},{value:"filesystem.writeFile(WriteFileOptions)",id:"filesystemwritefilewritefileoptions",children:[{value:"WriteFileOptions",id:"writefileoptions",children:[]}]},{value:"filesystem.readFile(ReadFileOptions)",id:"filesystemreadfilereadfileoptions",children:[{value:"ReadFileOptions",id:"readfileoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]},{value:"filesystem.removeFile(RemoveFileOptions)",id:"filesystemremovefileremovefileoptions",children:[{value:"RemoveFileOptions",id:"removefileoptions",children:[]}]},{value:"filesystem.readDirectory(ReadFileOptions)",id:"filesystemreaddirectoryreadfileoptions",children:[{value:"ReadDirectoryOptions",id:"readdirectoryoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-1",children:[]}]}],s={toc:c};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Neutralino.filesystem")," namespace contains methods for handling files."),Object(a.b)("h2",{id:"filesystemcreatedirectorycreatedirectoryoptions"},"filesystem.createDirectory(CreateDirectoryOptions)"),Object(a.b)("p",null,"Creates a new directory."),Object(a.b)("h3",{id:"createdirectoryoptions"},"CreateDirectoryOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path"),": New directory path.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.createDirectory({\n  path: './newDirectory',\n});\n")),Object(a.b)("h2",{id:"filesystemremovedirectoryremovedirectoryoptions"},"filesystem.removeDirectory(RemoveDirectoryOptions)"),Object(a.b)("p",null,"Removes given directories."),Object(a.b)("h3",{id:"removedirectoryoptions"},"RemoveDirectoryOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path"),": Directory path.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.removeDirectory({\n  path: './tmpDirectory',\n});\n")),Object(a.b)("h2",{id:"filesystemwritefilewritefileoptions"},"filesystem.writeFile(WriteFileOptions)"),Object(a.b)("p",null,"Writes new files with data."),Object(a.b)("h3",{id:"writefileoptions"},"WriteFileOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fileName"),": File name."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"data"),": Content of the file in string format.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.writeFile({\n  fileName: './myFile.txt',\n  data: 'Sample content'\n});\n")),Object(a.b)("h2",{id:"filesystemreadfilereadfileoptions"},"filesystem.readFile(ReadFileOptions)"),Object(a.b)("p",null,"Reads files contains text data."),Object(a.b)("h3",{id:"readfileoptions"},"ReadFileOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fileName"),": File name.")),Object(a.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"data"),": File content.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.filesystem.readFile({\n  fileName: './myFile.txt'\n});\nconsole.log(`Content: ${response.data}`);\n")),Object(a.b)("h2",{id:"filesystemremovefileremovefileoptions"},"filesystem.removeFile(RemoveFileOptions)"),Object(a.b)("p",null,"Removes given file."),Object(a.b)("h3",{id:"removefileoptions"},"RemoveFileOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fileName"),": File name.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.removeFile({\n  fileName: './myFile.txt'\n});\n")),Object(a.b)("h2",{id:"filesystemreaddirectoryreadfileoptions"},"filesystem.readDirectory(ReadFileOptions)"),Object(a.b)("p",null,"Reads a whole directory."),Object(a.b)("h3",{id:"readdirectoryoptions"},"ReadDirectoryOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path"),": File name.")),Object(a.b)("h3",{id:"return-object-awaited-1"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"entries"),": An array of sub-directories and files.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"entry"),": file name."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type"),": The type of the entry (",Object(a.b)("inlineCode",{parentName:"li"},"FILE")," or ",Object(a.b)("inlineCode",{parentName:"li"},"DIRECTORY"),").")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.filesystem.readDirectory({\n  path: NL_PATH\n});\nconsole.log(`Content: ${response.entries}`);\n")))}p.isMDXComponent=!0}}]);