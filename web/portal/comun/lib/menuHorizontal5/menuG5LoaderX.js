// Menu G5.5.1 (non-frame/loader)
// Last Modified: Oct.05, 2004
// Web Site: yxScripts.com
// Email: m_yangxin@hotmail.com

// Copyright 2003, 2004  Xin Yang   All Rights Reserved.

var _scriptPath="/portal/comun/lib/menuHorizontal5/";
var _menuTimer=500;
var _floatTimer=100;
var _floatOffset=1;
var _zBase=2;
var _menuMargin=1;
var _showMessage=1;
var _showToolTip=0;
var _onePixelGIF="onePixel.gif";
var _inheritStyle=1;
var _minimumWidth=0;
var _supportIEMac=1;
var _supportSafari=1;

Object.prototype.copy=function(){var o=new Object();for(var i in this){o[i]=typeof(this[i])=='object'?this[i].copy():this[i]}return o};Array.prototype.copy=function(){var a=new Array();for(var i in this){a[i]=typeof(this[i])=='object'?this[i].copy():this[i]}return a};Array.prototype.shift=Array.prototype.shift||function(){var a=this[0]||null;for(var i=0;i<this.length-1;i++){this[i]=this[i+1]};if(this.length>0){this.length--};return a};Array.prototype.push=Array.prototype.push||function(){for(var i=0;i<arguments.length;i++){this[this.length]=arguments[i]};return this[this.length-1]};if(typeof(webPath)=="undefined"){webPath=""};if(typeof(scriptPath)=="undefined"){scriptPath=_scriptPath};if(typeof(menuTimer)=="undefined"){menuTimer=_menuTimer};if(typeof(floatTimer)=="undefined"){floatTimer=_floatTimer};if(typeof(floatOffset)=="undefined"){floatOffset=_floatOffset};if(typeof(zBase)=="undefined"){zBase=_zBase};if(typeof(menuMargin)=="undefined"){menuMargin=_menuMargin};if(typeof(showMessage)=="undefined"){showMessage=_showMessage};if(typeof(showToolTip)=="undefined"){showToolTip=_showToolTip};if(typeof(onePixelGIF)=="undefined"){onePixelGIF=scriptPath+_onePixelGIF};if(typeof(inheritStyle)=="undefined"){inheritStyle=_inheritStyle};if(typeof(minimumWidth)=="undefined"){minimumWidth=_minimumWidth};if(typeof(supportIEMac)=="undefined"){supportIEMac=_supportIEMac};if(typeof(supportSafari)=="undefined"){supportSafari=_supportSafari};var yx_fg=navigator.userAgent.toLowerCase();var yx_isMac=(yx_fg.indexOf("mac")!=-1);var yx_isOpera=(yx_fg.indexOf("opera")!=-1);var yx_isOpera7=(yx_fg.indexOf("opera 7")!=-1||yx_fg.indexOf("opera/7")!=-1);var yx_isSafari=(yx_fg.indexOf("safari")!=-1);var yx_isIE=(yx_fg.indexOf("msie")!=-1&&!yx_isOpera);var yx_isIE5=(yx_isIE&&yx_fg.indexOf("msie 4")==-1);var yx_isIE55=(yx_isIE&&yx_fg.indexOf("msie 5.5")!=-1);var yx_isIE6=(yx_isIE&&yx_fg.indexOf("msie 6")!=-1);var yx_isIE55up=(yx_isIE55||yx_isIE6);var yx_isGecko=(yx_fg.indexOf("gecko")!=-1&&!yx_isSafari);var yx_isNetscape=(yx_isGecko&&yx_fg.indexOf("netscape")!=-1);var yx_menuSafe=(yx_isGecko||yx_isOpera7||yx_isSafari&&supportSafari||yx_isIE5&&yx_isMac&&supportIEMac||yx_isIE5&&!yx_isMac);var yx_M="M",yx_L="L",yx_C="C",yx_I="I",yx_S="S";var yx_dv=true,yx_ie="",yx_ep=false,yx_bl=null,yx_bk=null,yx_ei=false;var yx_al=0,yx_an=new Array();var yx_fp=0,yx_fm=0,yx_gj=0,yx_cc=menuMargin,yx_gi=0,yx_gk=0,yx_ij=0,yx_if=0;var yx_ga=new Image(1,1);yx_ga.src=onePixelGIF;var yx_fz=/(^\w+:)|(^\/)|(^\.)/,yx_bi=/css\s*:([\w\-\s]+),?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?/,yx_bj=/css2\s*:([\w\-\s]+),?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?,?([\w\-\s]+)?/,yx_ff=/\w/;var yx_fy=1,yx_hu=2,yx_en=3,yx_be=4,yx_el=5,yx_bd=6;function yx_fi(fv){return document.createElement(fv)};function yx_fj(ae,w,h,aa){var l=yx_fi("IMG");with(l){src=ae;width=w;height=h;border=0;hspace=0;vspace=0;align=aa};return l};function yx_fh(x,y,gi,cu){var l=yx_fi("DIV");with(l.style){position="absolute";visibility=gi;left=x+"px";top=y+"px";zIndex=cu};return l};function yx_ck(n){return document.getElementById(n)};function yx_gq(l,cu){l.style.zIndex=cu};function yx_dt(l){return l.style.zIndex};function yx_gs(l){l.style.visibility="visible"};function yx_dz(l){l.style.visibility="hidden"};function yx_fc(l,x,y){l.style.left=x+"px";l.style.top=y+"px"};function yx_fb(l,x,y){l.style.left=(parseInt(l.style.left)+x)+"px";l.style.top=(parseInt(l.style.top)+y)+"px"};function yx_at(menu){for(var i=0;i<menu.df.length;i++){if(menu.df[i].menu&&menu.df[i].menu.ex){yx_at(menu.df[i].menu)}};try{document.body.removeChild(menu.holder);if(menu.cv){document.body.removeChild(menu.cv)}}catch(err){}};function yx_by(){var item=this.item,si=item.fo;yx_gx();yx_gy(yx_gj);yx_gj=0;if(si.fc.eg||item.au.gh!=yx_M){yx_gm(item,si.fc.ba,si.ff.ba,si.fb.ba,si.fb.bb,si.fa.ba,true,si.fc.gk,si.fc.gq,si.fc.by)}};function yx_av(){yx_ei=true};function yx_ax(){var item=this.item,au=item.au,gh=au.gh,menu=item.dg;yx_gx();if(gh==yx_M||gh==yx_L){if(!item.fo.fc.eg&&gh==yx_M){if(item.menu.fm){item.menu.co(false);menu.open=false;this.dn(0)}else if(!item.menu.go){menu.open=true;this.dn(1);yx_gy(yx_fp);yx_fp=yx_ak(item,"ef","()",0)}}else if(au.di!=""){yx_az(null);yx_du(au.di,menu.cl.target)}}else if(au.ar!=""){yx_az(null);eval(au.ar)}};function yx_cd(bu){return(bu==null?0:bu.offsetWidth>0?bu.offsetWidth:bu.hasChildNodes()&&bu.firstChild.nodeType==1?bu.firstChild.offsetWidth:0)};function yx_em(item){return yx_cd(item.bl)+yx_cd(item.fv)+yx_cd(item.cs)+yx_cd(item.ct)};function yx_gp(){yx_fm=setTimeout("yx_az(null)",menuTimer*2)};function yx_gy(t){if(t>0)clearTimeout(t)};function yx_gw(){yx_ei=false;yx_gy(yx_fp);yx_fp=0;yx_gy(yx_fm);yx_fm=0;yx_gy(yx_gj);yx_gj=0};function yx_dg(et){return yx_fz.test(et)?et:(webPath+et)};function yx_gu(dv){if(showMessage==1)window.status=dv};function yx_ak(ec,cf,es,t){var x=yx_al++;yx_an[x]=null;yx_an[x]=ec;var tm=setTimeout(("yx_an["+x+"]."+cf+es),t);if(yx_al>200){yx_al=0};return tm};function yx_du(di,ft){if(di.substring(0,11).toLowerCase()=="javascript:"){eval(di.substring(11))}else{if(ft!=""){window.open(yx_dg(di),ft)}else{window.location.href=yx_dg(di)}}};function yx_co(ec,n){for(var i=0;i<ec.length;i++){if(ec[i].name==n){return ec[i]}};return null};function yx_de(ec,n){for(var i=0;i<ec.length;i++){if(ec[i].name==n){return ec[i]}};return ec[0]};function yx_hy(s){return(s.replace(/^\s+/,"")).replace(/\s$/,"")};function yx_cp(es,re){var ra=es.match(re),pa=new Array();pa[0]=(ra&&ra[1]&&yx_ff.test(ra[1]))?yx_hy(ra[1]):"";pa[1]=(ra&&ra[2]&&yx_ff.test(ra[2]))?yx_hy(ra[2]):pa[0];pa[2]=(ra&&ra[3]&&yx_ff.test(ra[3]))?yx_hy(ra[3]):pa[1];pa[3]=(ra&&ra[4]&&yx_ff.test(ra[4]))?yx_hy(ra[4]):pa[1];pa[4]=(ra&&ra[5]&&yx_ff.test(ra[5]))?yx_hy(ra[5]):pa[0];return pa};function yx_hj(sp,es){this.name=sp;this.bc=es.search(/pad-css\s*:([\w\-\s]+)/)!=-1?yx_hy(RegExp.$1):"";this.ck=es.search(/holder-css\s*:([\w\-\s]+)/)!=-1?yx_hy(RegExp.$1):"";this.bar=(es.search(/menu-form\s*:\s*bar/)!=-1);this.bk=es.search(/direction\s*:\s*(right-down|right-up|left-down|left-up|center-down|center-up|abs-right-down|abs-right-up|abs-left-down|abs-left-up|abs-center-up|abs-center-down|right-top|left-top|right-middle|left-middle|right-bottom|left-bottom)/)!=-1?(RegExp.$1):"";this.scroll=es.search(/scroll\s*:\s*(both|x-only|y-only|none)/)!=-1?(RegExp.$1):"none";this.step=es.search(/step\s*:\s*(\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.flip=(es.search(/flip\s*:\s*no/)==-1);this.dx=es.search(/offset-left\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.dy=es.search(/offset-top\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;var ra=es.match(/item-offset\s*:\s*(-?\d+)\s*,?\s*(-?\d+)?/);this.cq=(ra&&ra[1])?parseInt(ra[1],10):0;this.cr=(ra&&ra[2])?parseInt(ra[2],10):this.cq;this.col=es.search(/col\s*:\s*(\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.row=es.search(/row\s*:\s*(\d+)/)!=-1?parseInt(RegExp.$1,10):0;ra=es.match(/filters\s*:\s*(\w+)\s*,?\s*(\w+)?/);this.ca=!(ra&&ra[1]=="no");this.bx=(ra&&ra[2]=="yes");ra=es.match(/tiles\s*:\s*(\d+)\s*,?\s*(\d+)\s*:([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+),([\w\-\s]+)/);this.ga=(ra&&ra[1])?parseInt(ra[1],10):0;this.fz=(ra&&ra[2])?parseInt(ra[2],10):0;this.tiles=new Array();if(this.ga>0||this.fz>0){for(var i=0;i<9;i++){this.tiles[i]=(ra&&ra[i+3]&&yx_ff.test(ra[i+3]))?yx_hy(ra[i+3]):""}}};var yx_hk=new Array(new yx_hj("",""));function yx_hf(si,es){this.name=si;var pa=yx_cp(es,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]];this.cursor=es.search(/cursor\s*:([\w\-\s]+)/)!=-1?yx_hy(RegExp.$1):"";this.gk=es.search(/align\s*:\s*(left|center|right)/)!=-1?(RegExp.$1):"center";this.gq=es.search(/valign\s*:\s*(top|middle|bottom)/)!=-1?(RegExp.$1):"middle";this.actual=(es.search(/width\s*:\s*actual/)!=-1);this.eg=(es.search(/sub-menu\s*:\s*mouse-click/)==-1);var ra=es.match(/filters\s*:\s*(\w+)\s*,?\s*(\w+)?\s*,?\s*(\w+)?/);this.bz=(ra&&ra[1]=="yes");this.bw=!(ra&&ra[2]=="no");this.by=(ra&&ra[3]=="yes")};var yx_hg=new Array(new yx_hf("","width:actual;"));function yx_gz(sf,es){this.name=sf;var pa=yx_cp(es,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]]};var yx_ha=new Array(new yx_gz("",""));function yx_hn(st,es){this.name=st;var pa=yx_cp(es,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]];this.text=es.search(/text\s*:([^:]+):/)!=-1?yx_hy(RegExp.$1):""};var yx_ho=new Array(new yx_hn("",""));function yx_hd(so,es){this.name=so;var pa=yx_cp(es,yx_bi);this.bc=pa[0];this.ay=pa[1];this.ba=pa[2];this.bg=pa[3];this.be=[pa[0],pa[4]];var el=yx_cp(es,yx_bj);this.bd=el[0];this.az=el[1];this.bb=el[2];this.bh=el[3];this.bf=[el[0],el[4]];this.text=es.search(/text\s*:([^:]+):/)!=-1?yx_hy(RegExp.$1):"";this.text2=es.search(/text2\s*:([^:]+):/)!=-1?yx_hy(RegExp.$1):""};var yx_he=new Array(new yx_hd("",""));function yx_hl(ss,es){this.name=ss;var ra=es.match(/css\s*:([\w\-\s]+),?([\w\-\s]+)?/);this.bi=(ra&&ra[1])?yx_hy(ra[1]):"";this.ax=(ra&&ra[2])?yx_hy(ra[2]):""};var yx_hm=new Array(new yx_hl("",""));function yx_hh(sm,sp,si,sf,st,so,ss){this.name=sm;this.fd=yx_df(sp);this.fc=yx_cz(si);this.fa=yx_cv(sf);this.ff=yx_dm(st);this.fb=yx_cy(so);this.fe=yx_dk(ss)};var yx_hi=new Array(new yx_hh("","","","","","",""));function addStylePad(sp,es){yx_hk.push(new yx_hj(sp,es))};function addStyleItem(si,es){yx_hg.push(new yx_hf(si,es))};function addStyleFont(sf,es){yx_ha.push(new yx_gz(sf,es))};function addStyleTag(st,es){yx_ho.push(new yx_hn(st,es))};function addStyleIcon(so,es){yx_he.push(new yx_hd(so,es))};function addStyleSeparator(ss,es){yx_hm.push(new yx_hl(ss,es))};function addStyleMenu(sm,sp,si,sf,st,so,ss){yx_hi.push(new yx_hh(sm,sp,si,sf,st,so,ss))};function yx_dw(menu,style){this.menu=menu;this.style=style};function yx_hb(sg){this.name=sg;this.dp=new Array()};var yx_hc=new Array();function addStyleGroup(sg,sm){var gl=yx_cg(sg);if(gl==null){var x=yx_hc.length;yx_hc[x]=new yx_hb(sg);gl=yx_hc[x]};var gm=gl.dp.length;for(var i=2;i<addStyleGroup.arguments.length;i++){gl.dp[gm+i-2]=new yx_dw(addStyleGroup.arguments[i],sm)}};function setDefaultStyle(sp,si,sf,st,so,ss){if(sp!=""){yx_hi[0].fd=yx_df(sp)};if(si!=""){yx_hi[0].fc=yx_cz(si)};if(sf!=""){yx_hi[0].fa=yx_cv(sf)};if(st!=""){yx_hi[0].ff=yx_dm(st)};if(so!=""){yx_hi[0].fb=yx_cy(so)};if(ss!=""){yx_hi[0].fe=yx_dk(ss)}};function yx_df(sp){return yx_de(yx_hk,sp)};function yx_cz(si){return yx_de(yx_hg,si)};function yx_cv(sf){return yx_de(yx_ha,sf)};function yx_dm(st){return yx_de(yx_ho,st)};function yx_cy(so){return yx_de(yx_he,so)};function yx_dk(ss){return yx_de(yx_hm,ss)};function yx_dc(sm){return yx_co(yx_hi,sm)};function yx_cg(sg){return yx_co(yx_hc,sg)};function yx_cf(n){return yx_co(yx_bb,n)};function yx_cj(n){return yx_co(yx_eb,n)};function yx_cn(n){return yx_co(yx_eq,n)};function yx_eo(bl,dv,di,id){this.gh=yx_L;this.bl=bl;this.dv=dv;this.di=di;this.ci=id;this.ei=0};function yx_ba(bl,dv,ar,id){this.gh=yx_C;this.bl=bl;this.dv=dv;this.ar=ar;this.ci=id;this.ei=0};function yx_ed(bl,id){this.gh=yx_I;this.bl=bl;this.ci=id};function yx_gl(id){this.gh=yx_S;this.ci=id};function yx_hq(bl,dv,di,sub,id){this.name=sub;this.gh=yx_M;this.bl=bl;this.dv=dv;this.di=di;this.ci=id;this.ei=0;var x=yx_cm(sub);this.df=x==null?new Array():x.menu.df;this.am=yx_ad;this.al=yx_ac;this.aj=yx_aa;this.ak=yx_ab;this.an=yx_ae};function yx_hx(tm){this.name=tm;this.df=new Array();this.am=yx_ad;this.al=yx_ac;this.aj=yx_aa;this.ak=yx_ab;this.an=yx_ae};function yx_bc(n,ec){this.name=n;this.menu=ec};yx_bb=new Array();function yx_ad(bl,dv,di,sub,id){this.df.push(new yx_hq(bl,dv,di,sub,id))};function yx_ac(bl,dv,di,id){this.df.push(new yx_eo(bl,dv,di,id))};function yx_aa(bl,dv,ar,id){this.df.push(new yx_ba(bl,dv,ar,id))};function yx_ab(bl,id){this.df.push(new yx_ed(bl,id))};function yx_ae(id){this.df.push(new yx_gl(id))};function yx_cl(m,n){if(m.name==n){return m};var sm=null;for(var i=0;i<m.df.length;i++){if(m.df[i].gh==yx_M){sm=yx_cl(m.df[i],n);if(sm!=null){break}}};return sm};function yx_cm(n){return(yx_bk!=null&&yx_bk.name==n)?yx_bk:yx_cl(yx_bl,n)};function yx_af(n){yx_dv=false;yx_gu("["+n+"] Not Found.")};function addMenu(n,tm){if(yx_dv){yx_bl=new yx_hx(tm);yx_bk=null;var c=yx_cf(n);if(c==null){yx_bb.push(new yx_bc(n,yx_bl))}else{c.menu=yx_bl}}};function addSubMenu(n,bl,dv,di,sub,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.am(bl,dv||"",di||"",sub,id||"")}else{yx_af(n)}}};function addLink(n,bl,dv,di,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.al(bl,dv||"",di||"",id||"")}else{yx_af(n)}}};function addCommand(n,bl,dv,ar,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.aj(bl,dv||"",ar||"",id||"")}else{yx_af(n)}}};function addInfo(n,bl,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.ak(bl,id||"")}else{yx_af(n)}}};function addSeparator(n,id){if(yx_dv){yx_bk=yx_cm(n);if(yx_bk!=null){yx_bk.an(id||"")}else{yx_af(n)}}};function endMenu(){if(yx_dv){yx_gu("Menu Parsed")};yx_bl=null;yx_bk=null};function yx_dd(menu){if(menu.cl.style!=null){var fp=menu.cl.style.dp;for(var i=0;i<fp.length;i++){if(fp[i].menu==menu.au.name){return yx_dc(fp[i].style)}}};return(menu.dg==menu.cl||inheritStyle==0)?yx_hi[0]:menu.dg.dg.style};function yx_da(item){if(item.au.ci!=""&&item.dg.cl.style!=null){var fp=item.dg.cl.style.dp;for(var i=0;i<fp.length;i++){if(fp[i].menu==item.au.ci){return yx_dc(fp[i].style)}}};return item.dg.style};function yx_ik(x,y){this.x=x;this.y=y};function yx_dl(n){yx_ct();var x=(n==0||n==6||n==7)?0:((n==1||n==5||n== 8)?Math.round(yx_ij/2):(yx_ij-1));var y=(n==0||n==1||n==2)?0:((n==3||n==7||n== 8)?Math.round(yx_if/2):(yx_if-1));return(new yx_ik(x,y))};function yx_ch(n,dq){var cy=yx_co(yx_ee,n);return dq?((cy!=null&&cy.menu!=null&&cy.menu.ex)?cy:null):cy};function yx_az(cy){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].menu.fm&&yx_ee[i]!=cy){yx_ee[i].cm()}}};function yx_go(cy,cu){cy.z=cu;yx_gq(cy.menu.holder,cu)};function addInstance(n,mc,es){if(yx_menuSafe){var au=yx_cf(mc);if(au!=null){for(var i=0;i<yx_ee.length;i++){if(yx_ee[i].name==n){yx_bz(i);break}};yx_ee.push(new yx_eg(n,au.copy().menu,es));yx_gu("Menu ["+n+"] Enabled")}}};function yx_ce(n,bs,bt){this.name=n;this.as=bs;this.at=bt};var yx_eb=new Array(),yx_eq=new Array();function addItemEvent(n,bs,bt){var x=yx_cj(n);if(x==null){yx_eb.push(new yx_ce(n,bs,bt))}};function addMenuEvent(n,bs,bt){var x=yx_cn(n);if(x==null){yx_eq.push(new yx_ce(n,bs,bt))}};function addWindowEvent(eh){yx_ie=eh};function yx_bn(x,y,w,h,sx,sy){this.x=x;this.y=y;this.width=w;this.height=h;this.scrollx=sx;this.scrolly=sy};function yx_ct(){yx_gi=yx_di();yx_gk=yx_dj();yx_ij=yx_ds();yx_if=yx_dr()};function yx_gb(s){for(var i=1;i<yx_gb.arguments.length&&s.indexOf('%')!=-1;i++){s=s.substring(0,s.indexOf('%'))+yx_gb.arguments[i]+s.substring(s.indexOf('%')+1)};return s};function yx_do(fd,w,h){var fy="",fw="<td class='%' width='%' height='%'></td>",tw=fd.ga,th=fd.fz;if(th>0){if(tw>0){fy+=yx_gb("<tr>"+fw+fw+fw+"</tr>",fd.tiles[0],tw,th,fd.tiles[1],w-tw*2,th,fd.tiles[2],tw,th)}else{fy+=yx_gb("<tr>"+fw+"</tr>",fd.tiles[1],w,th)}};if(tw>0){fy+=yx_gb("<tr>"+fw+fw+fw+"</tr>",fd.tiles[3],tw,h-th*2,fd.tiles[4],w-tw*2,h-th*2,fd.tiles[5],tw,h-th*2)}else{fy+=yx_gb("<tr>"+fw+"</tr>",fd.tiles[4],w,h-th*2)};if(th>0){if(tw>0){fy+=yx_gb("<tr>"+fw+fw+fw+"</tr>",fd.tiles[6],tw,th,fd.tiles[7],w-tw*2,th,fd.tiles[8],tw,th)}else{fy+=yx_gb("<tr>"+fw+"</tr>",fd.tiles[7],w,th)}};return "<table cellpadding='0' cellspacing='0' border='0'>"+fy+"</table>"};function yx_dh(dq){var cl=this.cl,ej=this.dg,ek=ej.dg,fd=this.style.fd,sW=this.sW,sH=this.sH;var gn=cl.gk,gr=cl.gq,bk=fd.bk==""?(cl.bk):(fd.bk);yx_ct();var eq=0,er=0;if(ej==cl){eq=gn=="left"?0:gn=="center"?(-Math.round(this.width/2)):(-this.width+1);er=gr=="top"?0:gr=="middle"?(-Math.round(this.height/2)):(-this.height+1);if(cl.floating&&cl.gd>0){yx_gy(cl.gd);cl.gd=-1;cl.holder.x=cl.ox;cl.holder.y=cl.oy};eq+=cl.holder.x;er+=cl.holder.y;if(cl.eu=="slot"||cl.floating){eq+=yx_gi;er+=yx_gk}}else{var iX=ek.x+ej.x,iY=ek.y+ej.y,iW=ej.width,iH=ej.height;if(ek.bar){er=bk.indexOf("up")!=-1?(iY-this.height+sH):(iY+iH-sH);eq=bk.indexOf("abs-center")!=-1?(ek.x+Math.round((ek.width-this.width)/2)):bk.indexOf("abs-left")!=-1?ek.x:bk.indexOf("abs-right")!=-1?(ek.x+ek.width-this.width):bk.indexOf("center")!=-1?(iX+Math.round((iW-this.width)/2)):bk.indexOf("left")!=-1?(iX+iW-this.width+sW):(iX-sW)}else{eq=bk.indexOf("left")!=-1?(iX-this.width+sW):(iX+iW-sW);er=bk.indexOf("top")!=-1?ek.y:bk.indexOf("bottom")!=-1?(ek.y+ek.height-this.height):bk.indexOf("middle")!=-1?(ek.y+Math.round((ek.height-this.height)/2)):bk.indexOf("up")!=-1?(iY+iH-this.height+sH):(iY-sH)};eq+=fd.dx;er+=fd.dy;if(fd.flip){var ep=er,em=ep+this.height-1,en=eq,eo=en+this.width-1;var dx=0,bq=0,dy=0,br=0;if(ek.bar){if(bk.indexOf("down")!=-1&&em-yx_gk>=yx_if&&ep-this.height-ej.height+2*sH>=yx_gk){dy=-this.height-ej.height+2*sH-2*fd.dy;ep+=dy;em+=dy};if(bk.indexOf("up")!=-1&&ep<yx_gk&&em+this.height+ej.height-2*sH-yx_gk<yx_if){dy=this.height+ej.height-2*sH-2*fd.dy;ep+=dy;em+=dy}}else{if(bk.indexOf("right")!=-1&&eo-yx_gi>=yx_ij&&en-this.width-ej.width+2*sW>=yx_gi){dx=-this.width-ej.width+2*sW-2*fd.dx;en+=dx;eo+=dx};if(bk.indexOf("left")!=-1&&en<yx_gi&&eo+this.width+ej.width-2*sW-yx_gi<yx_ij){dx=this.width+ej.width-2*sW-2*fd.dx;en+=dx;eo+=dx}};if(em-yx_gk>=yx_if){br=yx_if+yx_gk-em-yx_cc};if(ep+br<yx_gk){br=yx_gk-ep+yx_cc};if(eo-yx_gi>=yx_ij){bq=yx_ij+yx_gi-eo-yx_cc};if(en+bq<yx_gi){bq=yx_gi-en+yx_cc};eq+=dx+bq;er+=dy+br}};this.du(eq,er);if(dq&&!this.fm&&(ek==null||ek.ai==ej)){yx_gq(this.holder,ek!=null?(yx_dt(ek.holder)+1):(++zBase));yx_gs(this.holder);this.fm=true;for(var i=0;i<this.dd;i++){var gh=this.df[i].au.gh;if(gh==yx_M||gh==yx_L||gh==yx_C){this.df[i].ed()}};if(this.as!=""){eval(this.as)}};if(ej==cl&&cl.floating&&cl.gd<0){cl.sX=yx_gi;cl.sY=yx_gk;cl.gb()}};function yx_ag(){this.open=false;if(this.ai!=null){this.ai.ed();this.ai=null;for(var i=0;i<this.dd;i++){if(this.df[i].menu!=null){this.df[i].menu.co(true)}};if(this.dg==this.cl&&this.cl.gi&&this.at!=""){eval(this.at)}}};function yx_cr(mx,ix,bl,mw,iw){return(mx+ix<yx_gi||mx+ix-bl-iw<yx_gi&&mx<yx_gi)?iw:(mx+ix+iw-yx_gi>yx_ij||mx+ix+iw+bl+iw-yx_gi>yx_ij&&mx+mw-yx_gi>yx_ij)?-iw:0};function yx_cs(my,iy,bl,mh,ih){return(my+iy<yx_gk||my+iy-bl-ih<yx_gk&&my<yx_gk)?ih:(my+iy+ih-yx_gk>yx_if||my+iy+ih+bl+ih-yx_gk>yx_if&&my+mh-yx_gk>yx_if)?-ih:0};function yx_gh(dx,dy){var bo=true;if(dx>0&&this.x+dx>=yx_gi){dx=yx_gi-this.x+yx_cc}else if(dx<0&&this.x+this.width-yx_gi+dx<=yx_ij){dx=yx_ij+yx_gi-this.x-this.width-yx_cc}else if(dy>0&&this.y+dy>=yx_gk){dy=yx_gk-this.y+yx_cc}else if(dy<0&&this.y+this.height-yx_gk+dy<=yx_if){dy=yx_if+yx_gk-this.y-this.height-yx_cc}else{bo=false};this.dt(dx,dy);if(!bo){yx_gj=yx_ak(this,"fg","("+dx+","+dy+")",floatTimer)}};function yx_ek(dg,au){this.dg=dg;this.au=au;this.fo=null;this.item=null;this.fv=null;this.cs=null;this.ct=null;this.bl=null;this.av=null;this.menu=null;this.x=0;this.y=0;this.ox=0;this.oy=0;this.width=0;this.height=0;this.ow=0;this.oh=0;this.as="";this.at="";this.dl=yx_es;this.dk=yx_er;this.ef=yx_fn;this.ed=yx_fl};function yx_ev(cl,dg,au){this.cl=cl;this.dg=dg;this.au=au;this.style=null;this.holder=null;this.pad=null;this.df=new Array();this.ai=null;this.dd=au.df.length;this.actual=false;this.ex=false;this.cb=false;this.go=false;this.fm=false;this.open=false;this.x=0;this.y=0;this.width=0;this.height=0;this.sW=0;this.sH=0;this.ch=yx_dh;this.as="";this.at="";this.dm=yx_et;this.fk=yx_gt;this.co=yx_ea;this.ao=yx_ag;this.du=yx_fe;this.dt=yx_fd;this.fg=yx_gh;this.bar=false};function yx_hs(menu,dq){for(var i=0;i<menu.dd;i++){var item=menu.df[i];if(item.au.ei==1){var si=item.fo;yx_gm(item,si.fc.be[dq],si.ff.be[dq],si.fb.be[dq],si.fb.bf[dq],si.fa.be[dq],true,si.fc.gk,si.fc.gq,false);if(item.au.gh==yx_M&&item.menu.ex){yx_hs(item.menu,dq)};break}}};function yx_ia(menu,et,dq){var bj=et.shift();for(var i=0;i<menu.df.length;i++){if(menu.df[i].ci==bj){menu.df[i].ei=dq;if(menu.df[i].gh==yx_M&&et.length>0){yx_ia(menu.df[i],et,dq)};break}}};function yx_gv(x){if(this.de.length>0){if(this.menu.ex){yx_hs(this.menu,0)};yx_ia(this.menu.au,this.de,0)};var dz=new Array();for(var i=1;i<x.length;i++){dz[i-1]=x[i]};if(dz.length>0){this.de=dz.copy();yx_ia(this.menu.au,dz,1);if(this.menu.ex){yx_hs(this.menu,1)}}};function yx_ge(){if(this.menu.ex){yx_hs(this.menu,0)};if(this.de.length>0){yx_ia(this.menu.au,this.de,0);this.de=new Array()}};function yx_eg(n,au,es){this.name=n;this.au=au;this.floating=(es.search(/floating\s*:\s*yes/)!=-1);var ra=es.match(/position\s*:\s*(absolute|relative|slot)\s*([\w\-]+)?/);this.eu=(ra&&ra[1])?ra[1]:"absolute";this.ey=(ra&&ra[2])?ra[2]:"";this.gk=es.search(/align\s*:\s*(left|center|right)/)!=-1?(RegExp.$1):"left";this.gq=es.search(/valign\s*:\s*(top|middle|bottom)/)!=-1?(RegExp.$1):"top";this.dx=es.search(/offset-left\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.dy=es.search(/offset-top\s*:\s*(-?\d+)/)!=-1?parseInt(RegExp.$1,10):0;this.bar=(es.search(/menu-form\s*:\s*bar/)!=-1);this.bk=es.search(/direction\s*:\s*(right-down|right-up|left-down|left-up|center-down|center-up|abs-right-down|abs-right-up|abs-left-down|abs-left-up|abs-center-up|abs-center-down|right-top|left-top|right-middle|left-middle|right-bottom|left-bottom)/)!=-1?(RegExp.$1):"right-down";this.gi=(es.search(/visibility\s*:\s*hidden/)==-1);this.target=es.search(/target\s*:\s*([\w\-]+)/)!=-1?(RegExp.$1):"";this.sticky=(es.search(/sticky\s*:\s*yes/)!=-1);this.highlight=(es.search(/highlight\s*:\s*no/)==-1);this.style=yx_cg(es.search(/style\s*:\s*([\w\-]+)/)!=-1?(RegExp.$1):"");this.dg=null;this.cl=this;this.menu=new yx_ev(this,this,this.au);this.gd=-1;this.gb=yx_hv;this.sX=0;this.sY=0;this.z=zBase-1;this.holder=null;this.cg=yx_cx;this.ox=0;this.oy=0;this.de=new Array();this.fl=yx_gv;this.ez=yx_ge;this.fj=yx_gr;this.cm=yx_dy;this.ds=yx_fa;this.dr=yx_ez};yx_ee=new Array();function yx_gr(){yx_ar();if(yx_ep){if(this.holder==null){this.cg()};yx_az(this);this.menu.fk()}};function yx_dy(){yx_ar();if(yx_ep){this.menu.co(true)}};function yx_fa(x,y){if(this.menu.ex){this.holder.x=x;this.holder.y=y;this.menu.ch(false);this.menu.ao()}};function yx_ez(x,y){if(this.menu.ex){this.holder.x+=x;this.holder.y+=y;this.menu.dt(x,y);this.menu.ao()}};function yx_hv(){yx_ct();if(this.sX!=yx_gi||this.sY!=yx_gk){var mx=yx_gi>this.sX?Math.ceil:Math.floor,my=yx_gk>this.sY?Math.ceil:Math.floor;var dx=mx((yx_gi-this.sX)/floatOffset),dy=my((yx_gk-this.sY)/floatOffset);this.sX+=dx;this.sY+=dy;this.dr(dx,dy)};this.gd=yx_ak(this,"gb","()",floatTimer)};function yx_ai(item){yx_gq(item.item,yx_el);yx_gq(item.av,yx_bd)};function yx_ah(item){yx_gq(item.item,yx_en);yx_gq(item.av,yx_be)};function yx_fx(){yx_gw()};function yx_fv(){yx_gw();if(!this.sticky){yx_gp()}};function yx_ay(){yx_ei=false;yx_gx()};function yx_eu(dq){var item=this.item,menu=item.dg,ev=menu.ai;var si=item.fo,fc=si.fc,fa=si.fa,ff=si.ff,fb=si.fb;if(ev!=null&&ev!=item){ev.ed()};menu.ai=item;yx_ai(item);yx_gm(item,dq==0?fc.ay:fc.bg,dq==0?ff.ay:ff.bg,dq==0?fb.ay:fb.bg,dq==0?fb.az:fb.bh,dq==0?fa.ay:fa.bg,(dq==0&&item!=ev),fc.gk,fc.gq,dq==0?fc.bw:false)};function yx_hz(it){var x=it.dg.dg;if(x.dg!=null){x.av.dn(1);yx_hz(x)}};function yx_bx(it){var x=it.menu;if(x!=null&&x.fm){for(var i=0;i<x.dd;i++){if(x.df[i].menu!=null&&x.df[i].menu.fm){x.df[i].av.dn(1);yx_bx(x.df[i]);break}}}};function yx_fn(){var gh=this.au.gh,menu=this.dg,cl=menu.cl;yx_az(cl);if(cl.z<zBase){yx_go(cl,++zBase)};for(var i=0;i<menu.dd;i++){if(menu.df[i]!=this&&menu.df[i].menu!=null){menu.df[i].menu.co(true)}};var fd=menu.style.fd;var dx=(fd.scroll=="none"||fd.scroll=="y-only")?0:yx_cr(menu.x,this.x,menu.bar?fd.cq:0,menu.width,fd.step==0?this.width:fd.step),dy=(fd.scroll=="none"||fd.scroll=="x-only")?0:yx_cs(menu.y,this.y,menu.bar?0:fd.cr,menu.height,fd.step==0?this.height:fd.step);if(dx!=0||dy!=0){yx_gj=yx_ak(menu,"fg","("+dx+","+dy+")",menuTimer)}else if(gh==yx_M){if((this.fo.fc.eg||menu.open)&&!this.menu.fm&&this.menu.dd>0){this.menu.fk()}else if(!cl.highlight){this.menu.ao()}}};function yx_fl(){var si=this.fo,dq=this.au.ei;yx_ah(this);yx_gm(this,si.fc.be[dq],si.ff.be[dq],si.fb.be[dq],si.fb.bf[dq],si.fa.be[dq],true,si.fc.gk,si.fc.gq,si.fc.bz)};function yx_fw(){var item=this.item;if(item.dg.fm){yx_gw();yx_gu(item.au.dv);if(item.as!=""){eval(item.as)};this.dn(item.au.gh==yx_M&&item.dg.open?1:0);yx_hz(item);yx_bx(item);yx_fp=yx_ak(item,"ef","()",menuTimer)}};function yx_fu(){yx_gw();if(this.item.at!=""){eval(this.item.at)};if(!this.sticky){yx_gp()}};function yx_cx(){var x=0,y=0;if(this.eu=="relative"){var l=yx_ck(this.ey);if(l!=null){x=yx_db(l);y=yx_dq(l)}}else if(this.eu=="slot"){var s=yx_dl(parseInt(this.ey));x=s.x;y=s.y};x+=this.dx;y+=this.dy;this.ox=x;this.oy=y;this.holder=new yx_ik(x,y)};function yx_gg(){yx_gw();yx_fr();yx_ct();for(var i=0;i<yx_ee.length;i++){var cy=yx_ee[i];if(cy.menu.ex){yx_gy(cy.gd);cy.gd=-1;cy.cm();cy.cg();cy.menu.ch(false)}};if(yx_ie!=""){eval(yx_ie)}};function yx_aq(menu,id){var df=menu.df,item=null;for(var i=0;i<menu.dd;i++){if(df[i].au.ci==id){return df[i]}};for(var i=0;i<menu.dd;i++){if(df[i].menu!=null&&df[i].menu.ex){item=yx_aq(df[i].menu,id);if(item!=null){break}}};return item};function yx_ci(n,id){var cy=yx_ch(n,false);if(cy!=null&&cy.menu.ex){var item=yx_aq(cy.menu,id);if(item!=null){return item}};return null};function yx_ib(){return true};function getMenuDim(n){var cy=yx_ch(n,true);return cy==null?null:(new yx_bn(cy.menu.x,cy.menu.y,cy.menu.width,cy.menu.height,yx_di(),yx_dj()))};function showMenu(n){var cy=yx_ch(n,false);if(cy!=null){yx_gw();cy.fj()}};function showMenuX(n){var cy=yx_ch(n,false);if(cy!=null){yx_gw();cy.gi=true;cy.fj()}};function hideMenu(n){var cy=yx_ch(n,true);if(cy!=null){cy.cm()}};function hideMenuX(n){var cy=yx_ch(n,true);if(cy!=null){cy.gi=false;cy.cm()}};function moveMenuTo(n,x,y){var cy=yx_ch(n,true);if(cy!=null){cy.ds(x,y)}};function moveMenuBy(n,x,y){var cy=yx_ch(n,true);if(cy!=null){cy.dr(x,y)}};function moveMenuBack(n){var cy=yx_ch(n,true);if(cy!=null){cy.ds(cy.ox,cy.oy)}};function openMenu(n){yx_gw();yx_fp=setTimeout("showMenu('"+n+"')",menuTimer)};function openMenuX(n){yx_gw();yx_fp=setTimeout("showMenuX('"+n+"')",menuTimer)};function closeMenuNow(){yx_az(null)};function closeMenu(){yx_gw();yx_gp()};function closeMenuX(n){var cy=yx_ch(n,true);if(cy!=null){cy.gi=false};closeMenu()};function clickMenu(n){yx_gx();showMenu(n)};function clickMenuX(n){yx_gx();showMenuX(n)};function switchMenu(n){yx_gx();var cy=yx_ch(n,false);if(cy!=null){var ag=(cy.gi&&cy.menu.fm)?hideMenuX:showMenuX;ag(n)}};function setHolder(n,id){var cy=yx_ch(n,false),l=yx_ck(id);if(cy!=null&&l!=null){cy.ox=yx_db(l)+cy.dx;cy.oy=yx_dq(l)+cy.dy;cy.holder=new yx_ik(cy.ox,cy.oy)}};function setCoordinates(n,x,y){var cy=yx_ch(n,false);if(cy!=null){cy.ox=x;cy.oy=y;cy.holder=new yx_ik(x,y)}};function slideMenuBack(n){var cy=yx_ch(n,false);if(cy!=null){addMenuEvent(cy.menu.au.name,"","moveMenuBack('"+n+"')")}};function showPagePath(n){var cy=yx_ch(n,false);if(cy!=null){cy.fl(showPagePath.arguments)}};function resetPagePath(n){var cy=yx_ch(n,false);if(cy!=null){cy.ez()}};function updateItemDisplay(n,id,bl){var item=yx_ci(n,id);if(item!=null&&item.au.gh!=yx_S){item.bl.innerHTML=bl}};function updateItemLink(n,id,di){var item=yx_ci(n,id);if(item!=null&&item.au.gh==yx_L){item.au.di=di}};function updateItemCode(n,id,ar){var item=yx_ci(n,id);if(item!=null&&item.au.gh==yx_C){item.au.ar=ar}};if(yx_menuSafe){var yx_ew=scriptPath+(yx_isGecko?"menuG5GeckoX.js":yx_isOpera7?"menuG5OperaX.js":yx_isSafari?"menuG5SafariX.js":"menuG5IEX.js");document.write("<scr"+"ipt language='javascript' src='"+yx_ew+"' gh='text/javascript'><\/scr"+"ipt>");if(typeof(contentScript)!="undefined"){document.write("<scr"+"ipt language='javascript' src='"+contentScript+"' gh='text/javascript'><\/scr"+"ipt>")};if(typeof(styleScript)!="undefined"){document.write("<scr"+"ipt language='javascript' src='"+styleScript+"' gh='text/javascript'><\/scr"+"ipt>")};if(typeof(instanceScript)!="undefined"){document.write("<scr"+"ipt language='javascript' src='"+instanceScript+"' gh='text/javascript'><\/scr"+"ipt>")}}else if(typeof(nonMenuPage)!="undefined"){setTimeout("window.location.replace('"+nonMenuPage+"')",0)};
