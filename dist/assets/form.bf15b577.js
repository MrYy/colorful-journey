import{d as b,A as x,r as A,D as U,I as w,B as R,C as P,U as G,c as S,V as T,W as I,X as N,i as $,Y as z,Z as q,$ as J,h as M,J as O,o as W,l as X,n as Y,m as e,w as o,s as i,T as Z}from"./index.badd45f4.js";/* empty css                     *//* empty css                    *//* empty css                 *//* empty css               *//* empty css               *//* empty css                  */const j={class:"container"},H={class:"form-box"},K=i("-"),L=i("\u8868\u5355\u63D0\u4EA4"),Q=i("\u91CD\u7F6E\u8868\u5355"),ee=b({name:"baseform"}),re=b({...ee,setup(le){const E=[{value:"guangdong",label:"\u5E7F\u4E1C\u7701",children:[{value:"guangzhou",label:"\u5E7F\u5DDE\u5E02",children:[{value:"tianhe",label:"\u5929\u6CB3\u533A"},{value:"haizhu",label:"\u6D77\u73E0\u533A"}]},{value:"dongguan",label:"\u4E1C\u839E\u5E02",children:[{value:"changan",label:"\u957F\u5B89\u9547"},{value:"humen",label:"\u864E\u95E8\u9547"}]}]},{value:"hunan",label:"\u6E56\u5357\u7701",children:[{value:"changsha",label:"\u957F\u6C99\u5E02",children:[{value:"yuelu",label:"\u5CB3\u9E93\u533A"}]}]}],f={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u5355\u540D\u79F0",trigger:"blur"}]},s=x(),u=A({name:"",region:"",date1:"",date2:"",delivery:!0,type:["\u6B65\u6B65\u9AD8"],resource:"\u5C0F\u5929\u624D",desc:"",options:[]}),V=n=>{!n||n.validate(l=>{if(l)console.log(u),Z.success("\u63D0\u4EA4\u6210\u529F\uFF01");else return!1})},F=n=>{!n||n.resetFields()};return(n,l)=>{const c=U,t=w,d=R,v=P,C=G,r=S,y=T,k=I,g=N,p=$,D=z,m=q,B=J,_=M,h=O;return W(),X("div",j,[Y("div",H,[e(h,{ref_key:"formRef",ref:s,rules:f,model:u,"label-width":"80px"},{default:o(()=>[e(t,{label:"\u8868\u5355\u540D\u79F0",prop:"name"},{default:o(()=>[e(c,{modelValue:u.name,"onUpdate:modelValue":l[0]||(l[0]=a=>u.name=a)},null,8,["modelValue"])]),_:1}),e(t,{label:"\u9009\u62E9\u5668",prop:"region"},{default:o(()=>[e(v,{modelValue:u.region,"onUpdate:modelValue":l[1]||(l[1]=a=>u.region=a),placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[e(d,{key:"bbk",label:"\u6B65\u6B65\u9AD8",value:"bbk"}),e(d,{key:"xtc",label:"\u5C0F\u5929\u624D",value:"xtc"}),e(d,{key:"imoo",label:"imoo",value:"imoo"})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u65E5\u671F\u65F6\u95F4"},{default:o(()=>[e(r,{span:11},{default:o(()=>[e(t,{prop:"date1"},{default:o(()=>[e(C,{type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",modelValue:u.date1,"onUpdate:modelValue":l[2]||(l[2]=a=>u.date1=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{class:"line",span:2},{default:o(()=>[K]),_:1}),e(r,{span:11},{default:o(()=>[e(t,{prop:"date2"},{default:o(()=>[e(y,{placeholder:"\u9009\u62E9\u65F6\u95F4",modelValue:u.date2,"onUpdate:modelValue":l[3]||(l[3]=a=>u.date2=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{label:"\u57CE\u5E02\u7EA7\u8054",prop:"options"},{default:o(()=>[e(k,{options:E,modelValue:u.options,"onUpdate:modelValue":l[4]||(l[4]=a=>u.options=a)},null,8,["modelValue"])]),_:1}),e(t,{label:"\u9009\u62E9\u5F00\u5173",prop:"delivery"},{default:o(()=>[e(g,{modelValue:u.delivery,"onUpdate:modelValue":l[5]||(l[5]=a=>u.delivery=a)},null,8,["modelValue"])]),_:1}),e(t,{label:"\u591A\u9009\u6846",prop:"type"},{default:o(()=>[e(D,{modelValue:u.type,"onUpdate:modelValue":l[6]||(l[6]=a=>u.type=a)},{default:o(()=>[e(p,{label:"\u6B65\u6B65\u9AD8",name:"type"}),e(p,{label:"\u5C0F\u5929\u624D",name:"type"}),e(p,{label:"imoo",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u5355\u9009\u6846",prop:"resource"},{default:o(()=>[e(B,{modelValue:u.resource,"onUpdate:modelValue":l[7]||(l[7]=a=>u.resource=a)},{default:o(()=>[e(m,{label:"\u6B65\u6B65\u9AD8"}),e(m,{label:"\u5C0F\u5929\u624D"}),e(m,{label:"imoo"})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u6587\u672C\u6846",prop:"desc"},{default:o(()=>[e(c,{type:"textarea",rows:"5",modelValue:u.desc,"onUpdate:modelValue":l[8]||(l[8]=a=>u.desc=a)},null,8,["modelValue"])]),_:1}),e(t,null,{default:o(()=>[e(_,{type:"primary",onClick:l[9]||(l[9]=a=>V(s.value))},{default:o(()=>[L]),_:1}),e(_,{onClick:l[10]||(l[10]=a=>F(s.value))},{default:o(()=>[Q]),_:1})]),_:1})]),_:1},8,["model"])])])}}});export{re as default};
