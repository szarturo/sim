// Menu G5.6.0 (frameset/loader)
// Last Modified: May 16, 2005
// Web Site: yxScripts.com
// Email: m_yangxin@hotmail.com

// Copyright 2003, 2004  Xin Yang   All Rights Reserved.

var _scriptPath="http://www.yxScripts.com/menuG5/script/";
var _menuTimer=500;
var _floatTimer=100;
var _floatOffset=1;
var _zBase=2;
var _menuMargin=1;
var _showMessage=1;
var _showToolTip=0;
var _onePixelGIF="onePixel.gif";
var _baseFrameset=self;
var _inheritStyle=1;
var _minimumWidth=0;
var _supportIEMac=1;
var _supportSafari=1;

Object.prototype.copy=function(){var o=new Object();for(var i in this){o[i]=typeof(this[i])=='object'?this[i].copy():this[i]}return o};Array.prototype.copy=function(){var a=new Array();for(var i in this){a[i]=typeof(this[i])=='object'?this[i].copy():this[i]}return a};Array.prototype.shift=Array.prototype.shift||function(){var a=this[0]||null;for(var i=0;i<this.length-1;i++){this[i]=this[i+1]};if(this.length>0){this.length--};return a};Array.prototype.push=Array.prototype.push||function(){for(var i=0;i<arguments.length;i++){this[this.length]=arguments[i]};return this[this.length-1]};if(typeof(webPath)=="undefined"){webPath=""};if(typeof(scriptPath)=="undefined"){scriptPath=_scriptPath};if(typeof(menuTimer)=="undefined"){menuTimer=_menuTimer};if(typeof(floatTimer)=="undefined"){floatTimer=_floatTimer};if(typeof(floatOffset)=="undefined"){floatOffset=_floatOffset};if(typeof(zBase)=="undefined"){zBase=_zBase};if(typeof(menuMargin)=="undefined"){menuMargin=_menuMargin};if(typeof(showMessage)=="undefined"){showMessage=_showMessage};if(typeof(showToolTip)=="undefined"){showToolTip=_showToolTip};if(typeof(onePixelGIF)=="undefined"){onePixelGIF=scriptPath+_onePixelGIF};if(typeof(baseFrameset)=="undefined"){baseFrameset=_baseFrameset};if(typeof(inheritStyle)=="undefined"){inheritStyle=_inheritStyle};if(typeof(minimumWidth)=="undefined"){minimumWidth=_minimumWidth};if(typeof(supportIEMac)=="undefined"){supportIEMac=_supportIEMac};if(typeof(supportSafari)=="undefined"){supportSafari=_supportSafari};var yx_fg=navigator.userAgent.toLowerCase();var yx_isMac=(yx_fg.indexOf("mac")!=-1);var yx_isOpera=(yx_fg.indexOf("opera")!=-1);var yx_isOpera7=(yx_fg.indexOf("opera 7")!=-1||yx_fg.indexOf("opera/7")!=-1||yx_fg.indexOf("opera 8")!=-1||yx_fg.indexOf("opera/8")!=-1);var yx_isSafari=(yx_fg.indexOf("safari")!=-1);var yx_isIE=(yx_fg.indexOf("msie")!=-1&&!yx_isOpera);var yx_isIE5=(yx_isIE&&yx_fg.indexOf("msie 4")==-1);var yx_isIE55=(yx_isIE&&yx_fg.indexOf("msie 5.5")!=-1);var yx_isIE6=(yx_isIE&&yx_fg.indexOf("msie 6")!=-1);var yx_isIE55up=(yx_isIE55||yx_isIE6);var yx_isGecko=(yx_fg.indexOf("gecko")!=-1&&!yx_isSafari);var yx_isNetscape=(yx_isGecko&&yx_fg.indexOf("netscape")!=-1);var yx_menuSafe=(yx_isGecko||yx_isOpera7||yx_isSafari&&supportSafari||yx_isIE5&&yx_isMac&&supportIEMac||yx_isIE5&&!yx_isMac);var yx_M="M",yx_L="L",yx_C="C",yx_I="I",yx_S="S";var yx_dv=true,yx_fo=0,yx_bl=null,yx_bk=null,yx_ei=false;var yx_al=0,yx_an=new Array();var yx_fp=0,yx_fm=0,yx_gj=0,yx_cc=menuMargin,yx_hx=0;var yx_ga=new Image(1,1);yx_ga.src=onePixelGIF;var yx_fz=/(^\w+:)|(^\/)|(^\.)/,yx_bi=/css\s*:([\w\-\s]+),?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?/,yx_bj=/css2\s*:([\w\-\s]+),?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?/,yx_ff=/\w/;var yx_fy=1,yx_hv=2,yx_en=3,yx_be=4,yx_el=5,yx_bd=6;function yx_fi(f,fu){return f.document.createElement(fu)};function yx_fj(f,ae,w,h,aa){var l=yx_fi(f,"IMG");with(l){src=ae;width=w;height=h;border=0;hspace=0;vspace=0;align=aa};return l};function yx_fh(f,x,y,gh,cu){var l=yx_fi(f,"DIV");with(l.style){position="absolute";visibility=gh;left=x+"px";top=y+"px";zIndex=cu};return l};function yx_ck(f,n){return f.document.getElementById(n)};function yx_gq(l,cu){l.style.zIndex=cu};function yx_dt(l){return l.style.zIndex};function yx_gt(l){l.style.visibility="visible"};function yx_dz(l){l.style.visibility="hidden"};function yx_fc(l,x,y){l.style.left=x+"px";l.style.top=y+"px"};function yx_fb(l,x,y){l.style.left=(parseInt(l.style.left)+x)+"px";l.style.top=(parseInt(l.style.top)+y)+"px"};function yx_at(menu){for(var i=0;i<menu.df.length;i++){if(menu.df[i].menu&&menu.df[i].menu.ew){yx_at(menu.df[i].menu)}};try{var f=yx_cw(menu);f.document.body.removeChild(menu.holder);if(menu.cv){f.document.body.removeChild(menu.cv)}}catch(err){}};function yx_cw(menu){return(menu.dg==menu.cl?(menu.cl.ge):(menu.cl.fq))};function yx_by(){var item=this.item,si=item.fm;yx_gy(yx_cw(item.dg));yx_gz(yx_gj);yx_gj=0;if(si.fb.ef||item.au.gg!=yx_M){yx_gm(item,si.fb.ba,si.fe.ba,si.fa.ba,si.fa.bb,si.ez.ba,true,si.fb.gj,si.fb.gq,si.fb.by)}};function yx_av(){yx_ei=true};function yx_ax(e){var item=this.item,au=item.au,gg=au.gg,menu=item.dg,f=yx_cw(menu);yx_gy(f);if(gg==yx_M||gg==yx_L){if(!item.fm.fb.ef&&gg==yx_M){if(item.menu.fl){item.menu.co(false);menu.open=false;this.dm(0)}else if(!item.menu.go){menu.open=true;this.dm(1);yx_gz(yx_fp);yx_fp=yx_ak(item,"ed","()",0,menu.cl.cz)}}else if(au.di!=""){yx_az(null);yx_du(f,au.di,au.dp,menu.cl.target,yx_gr(f,e))}}else if(au.ar!=""){yx_az(null);yx_bp(f,au.ar,au.dp)}};function yx_cd(bu){return(bu==null?0:bu.offsetWidth>0?bu.offsetWidth:bu.hasChildNodes()&&bu.firstChild.nodeType==1?bu.firstChild.offsetWidth:0)};function yx_em(item){return yx_cd(item.bl)+yx_cd(item.fu)+yx_cd(item.cs)+yx_cd(item.ct)};function yx_gp(){yx_fm=setTimeout("yx_az(null)",menuTimer*2)};function yx_gz(t){if(t>0)clearTimeout(t)};function yx_gx(){yx_ei=false;yx_gz(yx_fp);yx_fp=0;yx_gz(yx_fm);yx_fm=0;yx_gz(yx_gj);yx_gj=0};function yx_dg(es){return yx_fz.test(es)?es:(webPath+es)};function yx_gv(du){if(showMessage==1)window.status=du};function yx_am(eb,cy){this.eb=eb;this.cy=cy};function yx_ak(eb,cf,er,t,cy){var x=yx_al++;if(yx_an[x]){yx_an[x].eb=null;yx_an[x].cy=0;yx_an[x]=null};yx_an[x]=new yx_am(eb,cy);var tm=setTimeout(("yx_an["+x+"].eb."+cf+er),t);if(yx_al>200){yx_al=0};return tm};function yx_bp(f,ar,dp){yx_fo=0;yx_gx();eval(ar)};function yx_du(f,di,dp,ft,nw){yx_fo=0;yx_gx();if(di.indexOf("javascript:")!=-1){yx_bp(f,di,dp)}else{var m=dp!=""?dp:ft,l=yx_dg(di);if(nw){window.open(l)}else if(m=="top"){window.location.href=l}else if(m==""){f.location.href=l}else{var tf=yx_dn(baseFrameset,m);if(tf!=null){tf.location.href=l}else{window.open(l,m)}}}};function yx_dn(f,n){tf=null;if(typeof(f.frames)!="undefined"&&f.frames.length>0){for(var i=0;i<f.frames.length;i++){if(typeof(f.frames[i])!="undefined"){if(typeof(f.frames[i].name)!="undefined"&&typeof(f.frames[i].name)!="unknown"&&f.frames[i].name==n){return f.frames[i]};tf=yx_dn(f.frames[i],n);if(tf!=null){break}}}};return tf};function yx_co(eb,n){for(var i=0;i<eb.length;i++){if(eb[i].name==n){return eb[i]}};return null};function yx_de(eb,n){for(var i=0;i<eb.length;i++){if(eb[i].name==n){return eb[i]}};return eb[0]};function yx_hz(s){return(s.replace(/^\s+/,"")).replace(/\s$/,"")};function yx_cp(er,re){var ra=er.match(re),pa=new Array();pa[0]=(ra&&ra[1]&&yx_ff.test(ra[1]))?yx_hz(ra[1]):"";pa[1]=(ra&&ra[2]&&yx_ff.test(ra[2]))?yx_hz(ra[2]):pa[0];pa[2]=(ra&&ra[3]&&yx_ff.test(ra[3]))?yx_hz(ra[3]):pa[1];pa[3]=(ra&&ra[4]&&yx_ff.test(ra[4]))?yx_hz(ra[4]):pa[1];pa[4]=(ra&&ra[5]&&yx_ff.test(ra[5]))?yx_hz(ra[5]):pa[0];return pa};function yx_hk(sp,er){this.name=sp;this.bc=er.search(/pad-css\s*:([\w\-\s]+)/)!=-1?yx_hz(RegExp.$1):"";this.ck=er.search(/holder-css\s*:([\w\-\s]+)/)!=-1?yx_hz(RegExp.$1):"";this.bar=(er.search(/menu-form\s*:\s*bar/)!=-1);this.bk=er.search(/direction\s*:\s*(right-down|right-up|left-down|left-up|center-down|center-up|abs-right-down|abs-right-up|abs-left-down|abs-left-up|abs-center-up|abs-center-down|right-top|left-top|right-middle|left-middle|right-bottom|left-bottom)/)!=-1?(RegExp.$1):"";this.scroll=er.search(/scroll\s*:\s*(both|x-only|y-only|none)/)!=-1?(RegExp.$1):"none";this.step=er.search(/step\s*:\s*(\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.flip=(er.search(/flip\s*:\s*no/)==-1);this.dx=er.search(/offset-left\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.dy=er.search(/offset-top\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;var ra=er.match(/item-offset\s*:\s*(-?\d+)\s*,?\s*(-?\d+)?/);this.cq=(ra&&ra[1])?parseInt(ra[1],10):0;this.cr=(ra&&ra[2])?parseInt(ra[2],10):this.cq;this.col=er.search(/col\s*:\s*(\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.row=er.search(/row\s*:\s*(\d+)/)!=-1?parseInt(RegExp.$1,10):0;ra=er.match(/filters\s*:\s*(\w+)\s*,?\s*(\w+)?/);this.ca=!(ra&&ra[1]=="no");this.bx=(ra&&ra[2]=="yes");ra=er.match(/tiles\s*:\s*(\d+)\s*,?\s*(\d+)\s*:([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+)/);this.fz=(ra&&ra[1])?parseInt(ra[1],10):0;this.fy=(ra&&ra[2])?parseInt(ra[2],10):0;this.tiles=new Array();if(this.fz>0||this.fy>0){for(var i=0;i<9;i++){this.tiles[i]=(ra&&ra[i+3]&&yx_ff.test(ra[i+3]))?yx_hz(ra[i+3]):""}}};var yx_hl=new Array(new yx_hk("",""));function yx_hg(si,er){this.name=si;var pa=yx_cp(er,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]];this.cursor=er.search(/cursor\s*:([\w\-\s]+)/)!=-1?yx_hz(RegExp.$1):"";this.gj=er.search(/align\s*:\s*(left|center|right)/)!=-1?(RegExp.$1):"center";this.gq=er.search(/valign\s*:\s*(top|middle|bottom)/)!=-1?(RegExp.$1):"middle";this.actual=(er.search(/width\s*:\s*actual/)!=-1);this.ef=(er.search(/sub-menu\s*:\s*mouse-click/)==-1);var ra=er.match(/filters\s*:\s*(\w+)\s*,?\s*(\w+)?\s*,?\s*(\w+)?/);this.bz=(ra&&ra[1]=="yes");this.bw=!(ra&&ra[2]=="no");this.by=(ra&&ra[3]=="yes")};var yx_hh=new Array(new yx_hg("","width:actual;"));function yx_ha(sf,er){this.name=sf;var pa=yx_cp(er,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]]};var yx_hb=new Array(new yx_ha("",""));function yx_ho(st,er){this.name=st;var pa=yx_cp(er,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]];this.text=er.search(/text\s*:([^:]+):/)!=-1?yx_hz(RegExp.$1):""};var yx_hp=new Array(new yx_ho("",""));function yx_he(so,er){this.name=so;var pa=yx_cp(er,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]];var ek=yx_cp(er,yx_bj);this.bd=ek[0];this.az=ek[1];this.bb=ek[2];this.bh=ek[3];this.bf=[ek[0],ek[4]];this.text=er.search(/text\s*:([^:]+):/)!=-1?yx_hz(RegExp.$1):"";this.text2=er.search(/text2\s*:([^:]+):/)!=-1?yx_hz(RegExp.$1):""};var yx_hf=new Array(new yx_he("",""));function yx_hm(ss,er){this.name=ss;var ra=er.match(/css\s*:([\w\-\s]+),?([\w\-\s]+)?/);this.bi=(ra&&ra[1])?yx_hz(ra[1]):"";this.ax=(ra&&ra[2])?yx_hz(ra[2]):""};var yx_hn=new Array(new yx_hm("",""));function yx_hi(sm,sp,si,sf,st,so,ss){this.name=sm;this.fc=yx_df(sp);this.fb=yx_cz(si);this.ez=yx_cv(sf);this.fe=yx_dm(st);this.fa=yx_cy(so);this.fd=yx_dk(ss)};var yx_hj=new Array(new yx_hi("","","","","","",""));function addStylePad(sp,er){yx_hl.push(new yx_hk(sp,er))};function addStyleItem(si,er){yx_hh.push(new yx_hg(si,er))};function addStyleFont(sf,er){yx_hb.push(new yx_ha(sf,er))};function addStyleTag(st,er){yx_hp.push(new yx_ho(st,er))};function addStyleIcon(so,er){yx_hf.push(new yx_he(so,er))};function addStyleSeparator(ss,er){yx_hn.push(new yx_hm(ss,er))};function addStyleMenu(sm,sp,si,sf,st,so,ss){yx_hj.push(new yx_hi(sm,sp,si,sf,st,so,ss))};function yx_dw(menu,style){this.menu=menu;this.style=style};function yx_hc(sg){this.name=sg;this.dn=new Array()};var yx_hd=new Array();function addStyleGroup(sg,sm){var gl=yx_cg(sg);if(gl==null){var x=yx_hd.length;yx_hd[x]=new yx_hc(sg);gl=yx_hd[x]};var gm=gl.dn.length;for(var i=2;i<addStyleGroup.arguments.length;i++){gl.dn[gm+i-2]=new yx_dw(addStyleGroup.arguments[i],sm)}};function setDefaultStyle(sp,si,sf,st,so,ss){if(sp!=""){yx_hj[0].fc=yx_df(sp)};if(si!=""){yx_hj[0].fb=yx_cz(si)};if(sf!=""){yx_hj[0].ez=yx_cv(sf)};if(st!=""){yx_hj[0].fe=yx_dm(st)};if(so!=""){yx_hj[0].fa=yx_cy(so)};if(ss!=""){yx_hj[0].fd=yx_dk(ss)}};function yx_df(sp){return yx_de(yx_hl,sp)};function yx_cz(si){return yx_de(yx_hh,si)};function yx_cv(sf){return yx_de(yx_hb,sf)};function yx_dm(st){return yx_de(yx_hp,st)};function yx_cy(so){return yx_de(yx_hf,so)};function yx_dk(ss){return yx_de(yx_hn,ss)};function yx_dc(sm){return yx_co(yx_hj,sm)};function yx_cg(sg){return yx_co(yx_hd,sg)};function yx_cf(n){return yx_co(yx_bb,n)};function yx_cj(n){return yx_co(yx_eb,n)};function yx_cn(n){return yx_co(yx_eq,n)};function yx_eo(bl,du,di,id,dp){this.gg=yx_L;this.bl=bl;this.du=du;this.di=di;this.ci=id;this.dp=dp;this.eg=0};function yx_ba(bl,du,ar,id,dp){this.gg=yx_C;this.bl=bl;this.du=du;this.ar=ar;this.ci=id;this.dp=dp;this.eg=0};function yx_ed(bl,id){this.gg=yx_I;this.bl=bl;this.ci=id};function yx_gl(id){this.gg=yx_S;this.ci=id};function yx_hr(bl,du,di,sub,id,dp){this.name=sub;this.gg=yx_M;this.bl=bl;this.du=du;this.di=di;this.ci=id;this.dp=dp;this.eg=0;var x=yx_cm(sub);this.df=x==null?new Array():x.menu.df;this.am=yx_ad;this.al=yx_ac;this.aj=yx_aa;this.ak=yx_ab;this.an=yx_ae};function yx_hy(tm){this.name=tm;this.df=new Array();this.am=yx_ad;this.al=yx_ac;this.aj=yx_aa;this.ak=yx_ab;this.an=yx_ae};function yx_bc(n,eb){this.name=n;this.menu=eb};yx_bb=new Array();function yx_ad(bl,du,di,sub,id,dp){this.df.push(new yx_hr(bl,du,di,sub,id,dp))};function yx_ac(bl,du,di,id,dp){this.df.push(new yx_eo(bl,du,di,id,dp))};function yx_aa(bl,du,ar,id,dp){this.df.push(new yx_ba(bl,du,ar,id,dp))};function yx_ab(bl,id){this.df.push(new yx_ed(bl,id))};function yx_ae(id){this.df.push(new yx_gl(id))};function yx_cl(m,n){if(m.name==n){return m};var sm=null;for(var i=0;i<m.df.length;i++){if(m.df[i].gg==yx_M){sm=yx_cl(m.df[i],n);if(sm!=null){break}}};return sm};function yx_cm(n){return(yx_bk!=null&&yx_bk.name==n)?yx_bk:yx_cl(yx_bl,n)};function yx_af(n){yx_dv=false;yx_gv("["+n+"] Not Found.")};function addMenu(n,tm){if(yx_dv){yx_bl=new yx_hy(tm);yx_bk=null;var c=yx_cf(n);if(c==null){yx_bb.push(new yx_bc(n,yx_bl))}else{c.menu=yx_bl}}};function addSubMenu(n,bl,du,di,sub,id,dp){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.am(bl,du||"",di||"",sub,id||"",dp||"")}else{yx_af(n)}}};function addLink(n,bl,du,di,id,dp){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.al(bl,du||"",di||"",id||"",dp||"")}else{yx_af(n)}}};function addCommand(n,bl,du,ar,id,dp){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.aj(bl,du||"",ar||"",id||"",dp||"")}else{yx_af(n)}}};function addInfo(n,bl,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.ak(bl,id||"")}else{yx_af(n)}}};function addSeparator(n,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.an(id||"")}else{yx_af(n)}}};function endMenu(){if(yx_dv){yx_gv("Menu Parsed")};yx_bl=null;yx_bk=null};function yx_dd(menu){if(menu.cl.style!=null){var fo=menu.cl.style.dn;for(var i=0;i<fo.length;i++){if(fo[i].menu==menu.au.name){return yx_dc(fo[i].style)}}};return(menu.dg==menu.cl||inheritStyle==0)?yx_hj[0]:menu.dg.dg.style};function yx_da(item){if(item.au.ci!=""&&item.dg.cl.style!=null){var fo=item.dg.cl.style.dn;for(var i=0;i<fo.length;i++){if(fo[i].menu==item.au.ci){return yx_dc(fo[i].style)}}};return item.dg.style};function yx_il(x,y){this.x=x;this.y=y};function yx_dl(f,n){yx_ct(f);var x=(n==0||n==6||n==7)?0:((n==1||n==5||n== 8)?Math.round(f.yx_ik/2):(f.yx_ik-1));var y=(n==0||n==1||n==2)?0:((n==3||n==7||n== 8)?Math.round(f.yx_ig/2):(f.yx_ig-1));return(new yx_il(x,y))};function yx_ch(n,dp){var cy=yx_co(yx_ee,n);return dp?((cy!=null&&cy.menu!=null&&cy.menu.ew)?cy:null):cy};function yx_az(cy){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].menu.fl&&yx_ee[i]!=cy){yx_ee[i].cm()}}};function yx_go(cy,cu){cy.z=cu;yx_gq(cy.menu.holder,cu)};function addInstance(n,mc,er){if(yx_menuSafe){var au=yx_cf(mc);if(au!=null){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].name==n){yx_bz(i);break}};yx_ee.push(new yx_eg(n,au.copy().menu,er));yx_gv("Menu ["+n+"] Enabled")}}};function yx_ce(n,bs,bt,dp){this.name=n;this.as=bs;this.at=bt;this.dp=dp};var yx_eb=new Array(),yx_eq=new Array();function addItemEvent(n,bs,bt,dp){var x=yx_cj(n);if(x==null){yx_eb.push(new yx_ce(n,bs,bt,dp||""))}};function addMenuEvent(n,bs,bt,dp){var x=yx_cn(n);if(x==null){yx_eq.push(new yx_ce(n,bs,bt,dp||""))}};function yx_bn(x,y,w,h,sx,sy){this.x=x;this.y=y;this.width=w;this.height=h;this.scrollx=sx;this.scrolly=sy};function yx_ct(f){f.yx_gi=yx_di(f);f.yx_gk=yx_dj(f);f.yx_ik=yx_ds(f);f.yx_ig=yx_dr(f)};function yx_gb(s){for(var i=1;i<yx_gb.arguments.length&&s.indexOf('%')!=-1;i++){s=s.substring(0,s.indexOf('%'))+yx_gb.arguments[i]+s.substring(s.indexOf('%')+1)};return s};function yx_do(fc,w,h){var fx="",fv="<td class='%' width='%' height='%'></td>",tw=fc.fz,th=fc.fy;if(th>0){if(tw>0){fx+=yx_gb("<tr>"+fv+fv+fv+"</tr>",fc.tiles[0],tw,th,fc.tiles[1],w-tw*2,th,fc.tiles[2],tw,th)}else{fx+=yx_gb("<tr>"+fv+"</tr>",fc.tiles[1],w,th)}};if(tw>0){fx+=yx_gb("<tr>"+fv+fv+fv+"</tr>",fc.tiles[3],tw,h-th*2,fc.tiles[4],w-tw*2,h-th*2,fc.tiles[5],tw,h-th*2)}else{fx+=yx_gb("<tr>"+fv+"</tr>",fc.tiles[4],w,h-th*2)};if(th>0){if(tw>0){fx+=yx_gb("<tr>"+fv+fv+fv+"</tr>",fc.tiles[6],tw,th,fc.tiles[7],w-tw*2,th,fc.tiles[8],tw,th)}else{fx+=yx_gb("<tr>"+fv+"</tr>",fc.tiles[7],w,th)}};return "<table cellpadding='0' cellspacing='0' border='0'>"+fx+"</table>"};function yx_dh(dp){var cl=this.cl,ei=this.dg,ej=ei.dg,fc=this.style.fc,sW=this.sW,sH=this.sH;var gn=cl.gj,gs=cl.gq,bk=fc.bk==""?(cl.bk):(fc.bk);var f=yx_cw(this),ce=(ej!=null&&ej.dg==cl&&!cl.da);yx_ct(f);var ep=0,eq=0;if(ei==cl){ep=gn=="left"?0:gn=="center"?(-Math.round(this.width/2)):(-this.width+1);eq=gs=="top"?0:gs=="middle"?(-Math.round(this.height/2)):(-this.height+1);if(cl.floating&&cl.gc>0){yx_gz(cl.gc);cl.gc=-1;cl.holder.x=cl.ox;cl.holder.y=cl.oy};ep+=cl.holder.x;eq+=cl.holder.y;if(cl.et=="slot"||cl.floating){ep+=f.yx_gi;eq+=f.yx_gk}}else{var tf=cl.ge;if(ce){yx_ct(tf)};var iX=ej.x+ei.x,iY=ej.y+ei.y,iW=ei.width,iH=ei.height;if(ce){if(cl.gk=="right"){iX+=f.yx_ik-tf.yx_ik};if(cl.gr=="bottom"){iY+=f.yx_ig-tf.yx_ig}};if(ej.bar){eq=bk.indexOf("up")!=-1?(ce?(f.yx_ig-this.height):(iY-this.height+sH)):(ce?0:(iY+iH-sH));ep=bk.indexOf("abs-center")!=-1?(ej.x+Math.round((ej.width-this.width)/2)):bk.indexOf("abs-left")!=-1?ej.x:bk.indexOf("abs-right")!=-1?(ej.x+ej.width-this.width):bk.indexOf("center")!=-1?(iX+Math.round((iW-this.width)/2)):bk.indexOf("left")!=-1?(iX+iW-this.width+sW):(iX-sW)}else{ep=bk.indexOf("left")!=-1?(ce?(f.yx_ik-this.width):(iX-this.width+sW)):(ce?0:(iX+iW-sW));eq=bk.indexOf("top")!=-1?ej.y:bk.indexOf("bottom")!=-1?(ej.y+ej.height-this.height):bk.indexOf("middle")!=-1?(ej.y+Math.round((ej.height-this.height)/2)):bk.indexOf("up")!=-1?(iY+iH-this.height+sH):(iY-sH)};ep+=fc.dx;eq+=fc.dy;if(ce){ep+=(f.yx_gi-tf.yx_gi);eq+=(f.yx_gk-tf.yx_gk)};if(fc.flip){var eo=eq,el=eo+this.height-1,em=ep,en=em+this.width-1;var dx=0,bq=0,dy=0,br=0;if(ej.bar){if(bk.indexOf("down")!=-1&&el-f.yx_gk>=f.yx_ig&&eo-this.height-ei.height+2*sH>=f.yx_gk){dy=-this.height-ei.height+2*sH-2*fc.dy;eo+=dy;el+=dy};if(bk.indexOf("up")!=-1&&eo<f.yx_gk&&el+this.height+ei.height-2*sH-f.yx_gk<f.yx_ig){dy=this.height+ei.height-2*sH-2*fc.dy;eo+=dy;el+=dy}}else{if(bk.indexOf("right")!=-1&&en-f.yx_gi>=f.yx_ik&&em-this.width-ei.width+2*sW>=f.yx_gi){dx=-this.width-ei.width+2*sW-2*fc.dx;em+=dx;en+=dx};if(bk.indexOf("left")!=-1&&em<f.yx_gi&&en+this.width+ei.width-2*sW-f.yx_gi<f.yx_ik){dx=this.width+ei.width-2*sW-2*fc.dx;em+=dx;en+=dx}};if(el-f.yx_gk>=f.yx_ig){br=f.yx_ig+f.yx_gk-el-yx_cc};if(eo+br<f.yx_gk){br=f.yx_gk-eo+yx_cc};if(en-f.yx_gi>=f.yx_ik){bq=f.yx_ik+f.yx_gi-en-yx_cc};if(em+bq<f.yx_gi){bq=f.yx_gi-em+yx_cc};ep+=dx+bq;eq+=dy+br}};this.dt(ep,eq);if(dp&&!this.fl&&(ej==null||ej.ai==ei)){yx_gq(this.holder,ej!=null?(yx_dt(ej.holder)+1):(++zBase));yx_gt(this.holder);this.fl=true;for(var i=0;i<this.dd;i++){var gg=this.df[i].au.gg;if(gg==yx_M||gg==yx_L||gg==yx_C){this.df[i].ec()}};if(this.as!=""){yx_bp(f,this.as,this.dp)}};if(ei==cl&&cl.floating&&cl.gc<0){cl.sX=f.yx_gi;cl.sY=f.yx_gk;cl.ga()}};function yx_ag(){var cl=this.cl;this.open=false;if(this.ai!=null){this.ai.ec();this.ai=null;if(this.dg!=cl||cl.da||yx_ao(cl,0)){for(var i=0;i<this.dd;i++){if(this.df[i].menu!=null){this.df[i].menu.co(true)}}};if(this.dg==cl&&cl.gh&&this.at!=""){yx_bp(yx_cw(this),this.at,this.dp)}}};function yx_cr(f,mx,ix,bl,mw,iw){return(mx+ix<f.yx_gi||mx+ix-bl-iw<f.yx_gi&&mx<f.yx_gi)?iw:(mx+ix+iw-f.yx_gi>f.yx_ik||mx+ix+iw+bl+iw-f.yx_gi>f.yx_ik&&mx+mw-f.yx_gi>f.yx_ik)?-iw:0};function yx_cs(f,my,iy,bl,mh,ih){return(my+iy<f.yx_gk||my+iy-bl-ih<f.yx_gk&&my<f.yx_gk)?ih:(my+iy+ih-f.yx_gk>f.yx_ig||my+iy+ih+bl+ih-f.yx_gk>f.yx_ig&&my+mh-f.yx_gk>f.yx_ig)?-ih:0};function yx_gh(dx,dy){var f=yx_cw(this),bo=true;if(dx>0&&this.x+dx>=f.yx_gi){dx=f.yx_gi-this.x+yx_cc}else if(dx<0&&this.x+this.width-f.yx_gi+dx<=f.yx_ik){dx=f.yx_ik+f.yx_gi-this.x-this.width-yx_cc}else if(dy>0&&this.y+dy>=f.yx_gk){dy=f.yx_gk-this.y+yx_cc}else if(dy<0&&this.y+this.height-f.yx_gk+dy<=f.yx_ig){dy=f.yx_ig+f.yx_gk-this.y-this.height-yx_cc}else{bo=false};this.ds(dx,dy);if(!bo){yx_gj=yx_ak(this,"ff","("+dx+","+dy+")",floatTimer,this.cl.cz)}};function yx_ek(dg,au){this.dg=dg;this.au=au;this.fm=null;this.item=null;this.fu=null;this.cs=null;this.ct=null;this.bl=null;this.av=null;this.menu=null;this.x=0;this.y=0;this.ox=0;this.oy=0;this.width=0;this.height=0;this.ow=0;this.oh=0;this.as="";this.at="";this.dp="";this.dk=yx_es;this.dj=yx_er;this.ed=yx_fn;this.ec=yx_fl};function yx_ev(cl,dg,au){this.cl=cl;this.dg=dg;this.au=au;this.style=null;this.holder=null;this.pad=null;this.df=new Array();this.ai=null;this.dd=au.df.length;this.actual=false;this.ew=false;this.cb=false;this.go=false;this.fl=false;this.open=false;this.x=0;this.y=0;this.width=0;this.height=0;this.sW=0;this.sH=0;this.ch=yx_dh;this.as="";this.at="";this.dp="";this.dl=yx_et;this.fj=yx_gu;this.co=yx_ea;this.ao=yx_ag;this.dt=yx_fe;this.ds=yx_fd;this.ff=yx_gh;this.bar=false};function yx_ht(menu,dp){for(var i=0;i<menu.dd;i++){var item=menu.df[i];if(item.au.eg==1){var si=item.fm;yx_gm(item,si.fb.be[dp],si.fe.be[dp],si.fa.be[dp],si.fa.bf[dp],si.ez.be[dp],true,si.fb.gj,si.fb.gq,false);if(item.au.gg==yx_M&&item.menu.ew&&(menu.dg!=menu.cl||menu.cl.da||yx_ap(menu.cl,0,0)&&item.menu.ew)){yx_ht(item.menu,dp)};break}}};function yx_ib(menu,es,dp){var bj=es.shift();for(var i=0;i<menu.df.length;i++){if(menu.df[i].ci==bj){menu.df[i].eg=dp;if(menu.df[i].gg==yx_M&&es.length>0){yx_ib(menu.df[i],es,dp)};break}}};function yx_gw(x){if(this.de.length>0){if(this.menu.ew&&yx_ap(this,1,0)){yx_ht(this.menu,0)};yx_ib(this.menu.au,this.de,0)};var dv=new Array();for(var i=1;i<x.length;i++){dv[i-1]=x[i]};if(dv.length>0){this.de=dv.copy();yx_ib(this.menu.au,dv,1);if(this.menu.ew&&yx_ap(this,1,0)){yx_ht(this.menu,1)}}};function yx_ge(){if(this.menu.ew&&yx_ap(this,1,0)){yx_ht(this.menu,0)};if(this.de.length>0){yx_ib(this.menu.au,this.de,0);this.de=new Array()}};function yx_eg(n,au,er){this.name=n;this.au=au;this.floating=(er.search(/floating\s*:\s*yes/)!=-1);var ra=er.match(/position\s*:\s*(absolute|relative|slot)\s*([\w\-]+)?/);this.et=(ra&&ra[1])?ra[1]:"absolute";this.ex=(ra&&ra[2])?ra[2]:"";this.gj=er.search(/align\s*:\s*(left|center|right)/)!=-1?(RegExp.$1):"left";this.gq=er.search(/valign\s*:\s*(top|middle|bottom)/)!=-1?(RegExp.$1):"top";this.gk=er.search(/base\s*:\s*(left|right)/)!=-1?(RegExp.$1):"left";this.gr=er.search(/vbase\s*:\s*(top|bottom)/)!=-1?(RegExp.$1):"top";this.dx=er.search(/offset-left\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.dy=er.search(/offset-top\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.bar=(er.search(/menu-form\s*:\s*bar/)!=-1);this.bk=er.search(/direction\s*:\s*(right-down|right-up|left-down|left-up|center-down|center-up|abs-right-down|abs-right-up|abs-left-down|abs-left-up|abs-center-up|abs-center-down|right-top|left-top|right-middle|left-middle|right-bottom|left-bottom)/)!=-1?(RegExp.$1):"right-down";this.gh=(er.search(/visibility\s*:\s*hidden/)==-1);this.target=er.search(/target\s*:\s*([\w\-]+)/)!=-1?(RegExp.$1):"";this.sticky=(er.search(/sticky\s*:\s*yes/)!=-1);this.highlight=(er.search(/highlight\s*:\s*no/)==-1);this.style=yx_cg(er.search(/style\s*:\s*([\w\-]+)/)!=-1?(RegExp.$1):"");this.dg=null;this.cl=this;this.menu=new yx_ev(this,this,this.au);this.gc=-1;this.ga=yx_hw;this.sX=0;this.sY=0;this.z=zBase-1;this.holder=null;this.cg=yx_cx;this.ox=0;this.oy=0;this.ge=null;this.fq=null;this.da=false;this.cz=this.gd=this.fp=yx_dp();this.de=new Array();this.fk=yx_gw;this.ey=yx_ge;this.fi=yx_gs;this.cm=yx_dy;this.dr=yx_fa;this.dq=yx_ez;this.ev=yx_gc};yx_ee=new Array();function yx_gs(){if(yx_ap(this,1,0)){if(this.holder==null){this.cg()};yx_az(this);this.menu.fj()}};function yx_dy(){if(yx_ao(this,1)){this.menu.co(true)}};function yx_fa(x,y){if(this.menu.ew){this.holder.x=x;this.holder.y=y;this.menu.ch(false);this.menu.ao()}};function yx_ez(x,y){if(this.menu.ew){this.holder.x+=x;this.holder.y+=y;this.menu.ds(x,y);this.menu.ao()}};function yx_hw(){if(yx_ao(this,1)){var f=this.ge;yx_ct(f);if(this.sX!=f.yx_gi||this.sY!=f.yx_gk){var mx=f.yx_gi>this.sX?Math.ceil:Math.floor,my=f.yx_gk>this.sY?Math.ceil:Math.floor;var dx=mx((f.yx_gi-this.sX)/floatOffset),dy=my((f.yx_gk-this.sY)/floatOffset);this.sX+=dx;this.sY+=dy;this.dq(dx,dy)};this.gc=yx_ak(this,"ga","()",floatTimer,this.cz)}};function yx_ai(item){yx_gq(item.item,yx_el);yx_gq(item.av,yx_bd)};function yx_ah(item){yx_gq(item.item,yx_en);yx_gq(item.av,yx_be)};function yx_fx(){yx_gx();if((this.cl.da||this.dc==1)&&this.ap!=this.cl.gd||this.dc==0&&this.ap!=this.cl.fp){yx_ap(this.cl,this.dc,0)}else{yx_fo++}};function yx_fv(){if(--yx_fo==0){yx_gx();if(!this.sticky){yx_gp()}}};function yx_ay(){yx_ei=false;yx_gy(yx_cw(this.menu))};function yx_eu(dp){var item=this.item,menu=item.dg,eu=menu.ai;var si=item.fm,fb=si.fb,ez=si.ez,fe=si.fe,fa=si.fa;if(eu!=null&&eu!=item){eu.ec()};menu.ai=item;yx_ai(item);yx_gm(item,dp==0?fb.ay:fb.bg,dp==0?fe.ay:fe.bg,dp==0?fa.ay:fa.bg,dp==0?fa.az:fa.bh,dp==0?ez.ay:ez.bg,(dp==0&&item!=eu),fb.gj,fb.gq,dp==0?fb.bw:false)};function yx_ia(it){var x=it.dg.dg;if(x.dg!=null){x.av.dm(1);yx_ia(x)}};function yx_bx(it){var x=it.menu;if(x!=null&&x.fl){for(var i=0;i<x.dd;i++){if(x.df[i].menu!=null&&x.df[i].menu.fl){x.df[i].av.dm(1);yx_bx(x.df[i]);break}}}};function yx_fn(){var gg=this.au.gg,menu=this.dg,cl=menu.cl,f=yx_cw(menu);yx_az(cl);if(cl.z<zBase){yx_go(cl,++zBase)};for(var i=0;i<menu.dd;i++){if(menu.df[i]!=this&&menu.df[i].menu!=null){menu.df[i].menu.co(true)}};var fc=menu.style.fc;var dx=(fc.scroll=="none"||fc.scroll=="y-only")?0:yx_cr(f,menu.x,this.x,menu.bar?fc.cq:0,menu.width,fc.step==0?this.width:fc.step),dy=(fc.scroll=="none"||fc.scroll=="x-only")?0:yx_cs(f,menu.y,this.y,menu.bar?0:fc.cr,menu.height,fc.step==0?this.height:fc.step);if(dx!=0||dy!=0){yx_gj=yx_ak(menu,"ff","("+dx+","+dy+")",menuTimer,cl.cz)}else if(gg==yx_M){if((this.fm.fb.ef||menu.open)&&!this.menu.fl&&this.menu.dd>0){this.menu.fj()}else if(!cl.highlight){this.menu.ao()}}};function yx_fl(){var si=this.fm,dp=this.au.eg;yx_ah(this);yx_gm(this,si.fb.be[dp],si.fe.be[dp],si.fa.be[dp],si.fa.bf[dp],si.ez.be[dp],true,si.fb.gj,si.fb.gq,si.fb.bz)};function yx_fw(){var item=this.item,menu=item.dg,cl=menu.cl;if((cl.da||this.dc==1)&&this.ap!=cl.gd||this.dc==0&&this.ap!=cl.fp){yx_ap(cl,this.dc,0)}else if(menu.fl){yx_fo++;yx_gx();yx_gv(item.au.du);if(item.as!=""){yx_bp(yx_cw(menu),item.as,item.dp)};this.dm(item.au.gg==yx_M&&menu.open?1:0);yx_ia(item);yx_bx(item);if(menu.dg!=cl||cl.da||yx_ap(cl,0,0)){yx_fp=yx_ak(item,"ed","()",menuTimer,cl.cz)}}};function yx_fu(){var item=this.item;if(--yx_fo==0){yx_gx();if(!this.sticky){yx_gp()}};if(item.at!=""){yx_bp(yx_cw(item.dg),item.at,item.dp)}};function yx_cx(){var x=0,y=0;if(this.et=="relative"){var l=yx_ck(this.ge,this.ex);if(l!=null){x=yx_db(l);y=yx_dq(l)}}else if(this.et=="slot"){var s=yx_dl(this.ge,parseInt(this.ex));x=s.x;y=s.y};x+=this.dx;y+=this.dy;this.ox=x;this.oy=y;this.holder=new yx_il(x,y)};function yx_gc(){yx_gz(this.gc);this.gc=-1;this.cm();this.cg();this.menu.ch(false)};function yx_gg(f){yx_gx();for(var i=0;i<yx_ee.length;i++){var cy=yx_ee[i];if(cy.menu.ew&&cy.ge==f){cy.dr(-1000,-1000);yx_ak(cy,"ev","()",0,cy.cz)}}};function yx_hq(id,cy,f,m){this.name=id;this.cy=cy;this.cd=f;this.ew=m};var yx_hs=new Array();function yx_gd(f,cy,dp){if(dp=="wild"){var af=yx_co(yx_hs,cy);if(af!=null){af.cd=f;af.ew=true;if(af.cy!=""){yx_gd(f,af.cy,'sub')}}else{yx_hs.push(new yx_hq(cy,"",f,true))}}else{var ad=yx_ch(cy,false);if(ad!=null){ad.fq=f}}};function setSubID(cy,id){var af=yx_co(yx_hs,id);if(af!=null){af.cy=cy;if(af.cd!=null&&af.ew){yx_gd(af.cd,cy,'sub')}}else{yx_hs.push(new yx_hq(id,cy,null,false))}};function setSubFrame(cy,f){yx_gd(f,cy,'sub')};function setSubFrameName(cy,fn){var tf=yx_dn(baseFrameset,fn);if(tf!=null){yx_gd(tf,cy,'sub')}};function initSub(cy,f){yx_gd(f,cy,yx_ch(cy,false)!=null?'sub':'wild')};function initMenu(cy,dp,f){var ad=yx_ch(cy,false);if(ad!=null){ad.ge=f;if(dp=="all"){ad.fq=f;ad.da=true};if(ad.gh){yx_ak(ad,"fi","()",200,ad.cz)}}};function yx_dp(){return ++yx_hx};function yx_gn(cy,dp){var gb=yx_dp();if(cy.da){cy.gd=gb;cy.fp=gb}else if(dp==1){cy.gd=gb}else{cy.fp=gb};return gb};function yx_ap(cy,dp,aq){var f=(cy.da||dp==1)?(cy.ge):(cy.fq),gf=yx_ao(cy,dp),bp=dp==1?yx_cb:yx_ca;if(gf){if(typeof(f.yx_ef)=="undefined"){bp(cy);f.yx_ef=","+cy.cz+",";f.yx_aj=new Array();f.yx_aj[cy.cz]=yx_gn(cy,dp);f.yx_ow=yx_ds(f);f.yx_oh=yx_dr(f);if(typeof(f.yx_FS)=="undefined"){f.yx_FS=1;f.yx_fq=f.document.onclick?f.document.onclick:yx_ic;f.document.onclick=yx_aw}}else if(f.yx_ef.indexOf(cy.cz)==-1){bp(cy);f.yx_ef+=cy.cz+",";f.yx_aj[cy.cz]=yx_gn(cy,dp)}else if((cy.da||dp==1)&&f.yx_aj[cy.cz]<cy.gd||dp==0&&f.yx_aj[cy.cz]<cy.fp){bp(cy);f.yx_aj[cy.cz]=yx_gn(cy,dp);if(aq==0){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].name!=""&&yx_ee[i].cz!=cy.cz){yx_ap(yx_ee[i],1,1)}}}}};return gf};function yx_bm(f){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].name!=""){if(yx_ee[i].ge==f){yx_cb(yx_ee[i])}else if(yx_ee[i].fq==f){yx_ca(yx_ee[i])}}};if(f.yx_bo){f.yx_bo.cx=null;f.yx_bo=null};f.yx_ef="";f.yx_aj=new Array()};function yx_aq(menu,id){var df=menu.df,item=null;for(var i=0;i<menu.dd;i++){if(df[i].au.ci==id){return df[i]}};for(var i=0;i<menu.dd;i++){if(df[i].menu!=null&&df[i].menu.ew&&(menu.dg!=menu.cl||menu.cl.da||yx_ap(menu.cl,0,0)&&df[i].menu.ew)){item=yx_aq(df[i].menu,id);if(item!=null){break}}};return item};function yx_ci(n,id){var cy=yx_ch(n,false);if(cy!=null&&cy.menu.ew&&yx_ap(cy,1,0)){var item=yx_aq(cy.menu,id);if(item!=null){return item}};return null};function yx_ic(){return true};function getMenuDim(n){var cy=yx_ch(n,true);return cy==null?null:(new yx_bn(cy.menu.x,cy.menu.y,cy.menu.width,cy.menu.height,yx_di(cy.ge),yx_dj(cy.ge)))};function showMenu(n){var cy=yx_ch(n,false);if(cy!=null){yx_gx();cy.fi()}};function showMenuX(n){var cy=yx_ch(n,false);if(cy!=null){yx_gx();cy.gh=true;cy.fi()}};function hideMenu(n){var cy=yx_ch(n,true);if(cy!=null){cy.cm()}};function hideMenuX(n){var cy=yx_ch(n,true);if(cy!=null){cy.gh=false;cy.cm()}};function moveMenuTo(n,x,y){var cy=yx_ch(n,true);if(cy!=null){cy.dr(x,y)}};function moveMenuBy(n,x,y){var cy=yx_ch(n,true);if(cy!=null){cy.dq(x,y)}};function moveMenuBack(n){var cy=yx_ch(n,true);if(cy!=null){cy.dr(cy.ox,cy.oy)}};function openMenu(n){yx_gx();yx_fp=setTimeout("showMenu('"+n+"')",menuTimer)};function openMenuX(n){yx_gx();yx_fp=setTimeout("showMenuX('"+n+"')",menuTimer)};function closeMenuNow(){yx_az(null)};function closeMenu(){yx_gx();yx_gp()};function closeMenuX(n){var cy=yx_ch(n,true);if(cy!=null){cy.gh=false};closeMenu()};function clickMenu(n,f){yx_gy(f);showMenu(n)};function clickMenuX(n,f){yx_gy(f);showMenuX(n)};function switchMenu(n,f){yx_gy(f);var cy=yx_ch(n,false);if(cy!=null){var ag=(cy.gh&&cy.menu.fl)?hideMenuX:showMenuX;ag(n)}};function setHolder(n,id,f){var cy=yx_ch(n,false),l=yx_ck(f,id);if(cy!=null&&l!=null){cy.ox=yx_db(l)+cy.dx;cy.oy=yx_dq(l)+cy.dy;cy.holder=new yx_il(cy.ox,cy.oy)}};function setCoordinates(n,x,y){var cy=yx_ch(n,false);if(cy!=null){cy.ox=x;cy.oy=y;cy.holder=new yx_il(x,y)}};function slideMenuBack(n){var cy=yx_ch(n,false);if(cy!=null){addMenuEvent(cy.menu.au.name,"","moveMenuBack('"+n+"')")}};function showPagePath(n){var cy=yx_ch(n,false);if(cy!=null){cy.fk(showPagePath.arguments)}};function resetPagePath(n){var cy=yx_ch(n,false);if(cy!=null){cy.ey()}};function updateItemDisplay(n,id,bl){var item=yx_ci(n,id);if(item!=null&&item.au.gg!=yx_S){item.bl.innerHTML=bl}};function updateItemLink(n,id,di){var item=yx_ci(n,id);if(item!=null&&item.au.gg==yx_L){item.au.di=di}};function updateItemCode(n,id,ar){var item=yx_ci(n,id);if(item!=null&&item.au.gg==yx_C){item.au.ar=ar}};if(yx_menuSafe){var yx_ew=scriptPath+(yx_isGecko?"menuG5GeckoFSX.js":yx_isOpera7?"menuG5OperaFSX.js":yx_isSafari?"menuG5SafariFSX.js":"menuG5IEFSX.js");document.write("<scr"+"ipt language='javascript' src='"+yx_ew+"' gg='text/javascript'><\/scr"+"ipt>");if(typeof(contentScript)!="undefined"){document.write("<scr"+"ipt language='javascript' src='"+contentScript+"' gg='text/javascript'><\/scr"+"ipt>")};if(typeof(styleScript)!="undefined"){document.write("<scr"+"ipt language='javascript' src='"+styleScript+"' gg='text/javascript'><\/scr"+"ipt>")};if(typeof(instanceScript)!="undefined"){document.write("<scr"+"ipt language='javascript' src='"+instanceScript+"' gg='text/javascript'><\/scr"+"ipt>")}}else if(typeof(nonMenuPage)!="undefined"){setTimeout("window.location.replace('"+nonMenuPage+"')",0)};
