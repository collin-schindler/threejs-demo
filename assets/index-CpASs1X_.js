(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const rs="182",Mr={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,mc=1,bd=2,no=1,Ad=2,qr=3,Pn=0,Fe=1,_n=2,$n=0,Er=1,_c=2,xc=3,vc=4,Td=5,Ii=100,wd=101,Cd=102,Rd=103,Pd=104,Dd=200,Id=201,Ld=202,Ud=203,Oa=204,Ba=205,Nd=206,Fd=207,Od=208,Bd=209,zd=210,Vd=211,Hd=212,kd=213,Gd=214,za=0,Va=1,Ha=2,Ar=3,ka=4,Ga=5,Wa=6,Xa=7,fu=0,Wd=1,Xd=2,wn=0,pu=1,gu=2,mu=3,_u=4,xu=5,vu=6,Su=7,yu=300,Bi=301,Tr=302,$a=303,qa=304,Eo=306,Ya=1e3,Xn=1001,Ka=1002,we=1003,$d=1004,us=1005,Pe=1006,Uo=1007,Ui=1008,cn=1009,Mu=1010,Eu=1011,jr=1012,kl=1013,Dn=1014,En=1015,Kn=1016,Gl=1017,Wl=1018,Jr=1020,bu=35902,Au=35899,Tu=1021,wu=1022,xn=1023,Zn=1026,Ni=1027,Cu=1028,Xl=1029,wr=1030,$l=1031,ql=1033,io=33776,ro=33777,so=33778,oo=33779,Za=35840,ja=35841,Ja=35842,Qa=35843,tl=36196,el=37492,nl=37496,il=37488,rl=37489,sl=37490,ol=37491,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,gl=37816,ml=37817,_l=37818,xl=37819,vl=37820,Sl=37821,yl=36492,Ml=36494,El=36495,bl=36283,Al=36284,Tl=36285,wl=36286,qd=3200,Ru=0,Yd=1,ui="",on="srgb",Cr="srgb-linear",go="linear",ne="srgb",Xi=7680,Sc=519,Kd=512,Zd=513,jd=514,Yl=515,Jd=516,Qd=517,Kl=518,tf=519,yc=35044,Mc="300 es",bn=2e3,mo=2001;function Pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=_o("canvas");return i.style.display="block",i}const Ec={};function bc(...i){const t="THREE."+i.shift();console.log(t,...i)}function kt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Qt(...i){const t="THREE."+i.shift();console.error(t,...i)}function Qr(...i){const t=i.join(" ");t in Ec||(Ec[t]=!0,kt(...i))}function nf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,Cl=180/Math.PI;function ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function No(i,t,e){return(1-e)*i+e*t}function Ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:ao};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let h=n[r+0],d=n[r+1],u=n[r+2],p=n[r+3],g=s[o+0],m=s[o+1],M=s[o+2],E=s[o+3];if(a<=0){t[e+0]=h,t[e+1]=d,t[e+2]=u,t[e+3]=p;return}if(a>=1){t[e+0]=g,t[e+1]=m,t[e+2]=M,t[e+3]=E;return}if(p!==E||h!==g||d!==m||u!==M){let v=h*g+d*m+u*M+p*E;v<0&&(g=-g,m=-m,M=-M,E=-E,v=-v);let _=1-a;if(v<.9995){const b=Math.acos(v),f=Math.sin(b);_=Math.sin(_*b)/f,a=Math.sin(a*b)/f,h=h*_+g*a,d=d*_+m*a,u=u*_+M*a,p=p*_+E*a}else{h=h*_+g*a,d=d*_+m*a,u=u*_+M*a,p=p*_+E*a;const b=1/Math.sqrt(h*h+d*d+u*u+p*p);h*=b,d*=b,u*=b,p*=b}}t[e]=h,t[e+1]=d,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],h=n[r+1],d=n[r+2],u=n[r+3],p=s[o],g=s[o+1],m=s[o+2],M=s[o+3];return t[e]=a*M+u*p+h*m-d*g,t[e+1]=h*M+u*g+d*p-a*m,t[e+2]=d*M+u*m+a*g-h*p,t[e+3]=u*M-a*p-h*g-d*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,d=a(n/2),u=a(r/2),p=a(s/2),g=h(n/2),m=h(r/2),M=h(s/2);switch(o){case"XYZ":this._x=g*u*p+d*m*M,this._y=d*m*p-g*u*M,this._z=d*u*M+g*m*p,this._w=d*u*p-g*m*M;break;case"YXZ":this._x=g*u*p+d*m*M,this._y=d*m*p-g*u*M,this._z=d*u*M-g*m*p,this._w=d*u*p+g*m*M;break;case"ZXY":this._x=g*u*p-d*m*M,this._y=d*m*p+g*u*M,this._z=d*u*M+g*m*p,this._w=d*u*p-g*m*M;break;case"ZYX":this._x=g*u*p-d*m*M,this._y=d*m*p+g*u*M,this._z=d*u*M-g*m*p,this._w=d*u*p+g*m*M;break;case"YZX":this._x=g*u*p+d*m*M,this._y=d*m*p+g*u*M,this._z=d*u*M-g*m*p,this._w=d*u*p-g*m*M;break;case"XZY":this._x=g*u*p-d*m*M,this._y=d*m*p-g*u*M,this._z=d*u*M+g*m*p,this._w=d*u*p+g*m*M;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],d=e[2],u=e[6],p=e[10],g=n+a+p;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(u-h)*m,this._y=(s-d)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(u-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+d)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-d)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+u)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+d)/m,this._y=(h+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,d=e._z,u=e._w;return this._x=n*u+o*a+r*d-s*h,this._y=r*u+o*h+s*a-n*d,this._z=s*u+o*d+n*h-r*a,this._w=o*u-n*a-r*h-s*d,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let h=1-e;if(a<.9995){const d=Math.acos(a),u=Math.sin(d);h=Math.sin(h*d)/u,e=Math.sin(e*d)/u,this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,d=2*(o*r-a*n),u=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+h*d+o*p-a*u,this.y=n+h*u+a*d-s*p,this.z=r+h*p+s*u-o*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new U,Ac=new zi;class Xt{constructor(t,e,n,r,s,o,a,h,d){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,d)}set(t,e,n,r,s,o,a,h,d){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=h,u[6]=n,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],h=n[6],d=n[1],u=n[4],p=n[7],g=n[2],m=n[5],M=n[8],E=r[0],v=r[3],_=r[6],b=r[1],f=r[4],c=r[7],S=r[2],l=r[5],R=r[8];return s[0]=o*E+a*b+h*S,s[3]=o*v+a*f+h*l,s[6]=o*_+a*c+h*R,s[1]=d*E+u*b+p*S,s[4]=d*v+u*f+p*l,s[7]=d*_+u*c+p*R,s[2]=g*E+m*b+M*S,s[5]=g*v+m*f+M*l,s[8]=g*_+m*c+M*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],d=t[7],u=t[8];return e*o*u-e*a*d-n*s*u+n*a*h+r*s*d-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],d=t[7],u=t[8],p=u*o-a*d,g=a*h-u*s,m=d*s-o*h,M=e*p+n*g+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=p*E,t[1]=(r*d-u*n)*E,t[2]=(a*n-r*o)*E,t[3]=g*E,t[4]=(u*e-r*h)*E,t[5]=(r*s-a*e)*E,t[6]=m*E,t[7]=(n*h-d*e)*E,t[8]=(o*e-n*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const h=Math.cos(s),d=Math.sin(s);return this.set(n*h,n*d,-n*(h*o+d*a)+o+t,-r*d,r*h,-r*(-d*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Xt,Tc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){const i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ne&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:go,toXYZ:Tc,fromXYZ:wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Tc,fromXYZ:wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const Zt=of();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class af{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=_o("canvas")),$i.width=t.width,$i.height=t.height;const r=$i.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lf=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bo(r[o].image)):s.push(Bo(r[o]))}else s=Bo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let cf=0;const zo=new U;class Oe extends ki{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Xn,r=Xn,s=Pe,o=Ui,a=xn,h=cn,d=Oe.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ss(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=h,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=yu;Oe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,r=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const h=t.elements,d=h[0],u=h[4],p=h[8],g=h[1],m=h[5],M=h[9],E=h[2],v=h[6],_=h[10];if(Math.abs(u-g)<.01&&Math.abs(p-E)<.01&&Math.abs(M-v)<.01){if(Math.abs(u+g)<.1&&Math.abs(p+E)<.1&&Math.abs(M+v)<.1&&Math.abs(d+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const f=(d+1)/2,c=(m+1)/2,S=(_+1)/2,l=(u+g)/4,R=(p+E)/4,w=(M+v)/4;return f>c&&f>S?f<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(f),r=l/n,s=R/n):c>S?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=l/r,s=w/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=R/s,r=w/s),this.set(n,r,s,e),this}let b=Math.sqrt((v-M)*(v-M)+(p-E)*(p-E)+(g-u)*(g-u));return Math.abs(b)<.001&&(b=1),this.x=(v-M)/b,this.y=(p-E)/b,this.z=(g-u)/b,this.w=Math.acos((d+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hf extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Oe(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Zl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends hf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Du extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=we,this.minFilter=we,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=we,this.minFilter=we,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Be{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),fs.subVectors(this.max,Lr),qi.subVectors(t.a,Lr),Yi.subVectors(t.b,Lr),Ki.subVectors(t.c,Lr),ei.subVectors(Yi,qi),ni.subVectors(Ki,Yi),Si.subVectors(qi,Ki);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Si.z,Si.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Si.z,0,-Si.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Si.y,Si.x,0];return!Vo(e,qi,Yi,Ki,fs)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,qi,Yi,Ki,fs))?!1:(ps.crossVectors(ei,ni),e=[ps.x,ps.y,ps.z],Vo(e,qi,Yi,Ki,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,ds=new Be,qi=new U,Yi=new U,Ki=new U,ei=new U,ni=new U,Si=new U,Lr=new U,fs=new U,ps=new U,yi=new U;function Vo(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yi.fromArray(i,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),h=t.dot(yi),d=e.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(h,d,u),Math.min(h,d,u))>a)return!1}return!0}const df=new Be,Ur=new U,Ho=new U;class jl{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Ho)),this.expandByPoint(Ur.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new U,ko=new U,gs=new U,ii=new U,Go=new U,ms=new U,Wo=new U;class os{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ko.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(ko);const s=t.distanceTo(e)*.5,o=-this.direction.dot(gs),a=ii.dot(this.direction),h=-ii.dot(gs),d=ii.lengthSq(),u=Math.abs(1-o*o);let p,g,m,M;if(u>0)if(p=o*h-a,g=o*a-h,M=s*u,p>=0)if(g>=-M)if(g<=M){const E=1/u;p*=E,g*=E,m=p*(p+o*g+2*a)+g*(o*p+g+2*h)+d}else g=s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+d;else g=-s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+d;else g<=-M?(p=Math.max(0,-(-o*s+a)),g=p>0?-s:Math.min(Math.max(-s,-h),s),m=-p*p+g*(g+2*h)+d):g<=M?(p=0,g=Math.min(Math.max(-s,-h),s),m=g*(g+2*h)+d):(p=Math.max(0,-(o*s+a)),g=p>0?s:Math.min(Math.max(-s,-h),s),m=-p*p+g*(g+2*h)+d);else g=o>0?-s:s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ko).addScaledVector(gs,g),m}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,h;const d=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,g=this.origin;return d>=0?(n=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(n=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),u>=0?(s=(t.min.y-g.y)*u,o=(t.max.y-g.y)*u):(s=(t.max.y-g.y)*u,o=(t.min.y-g.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-g.z)*p,h=(t.max.z-g.z)*p):(a=(t.max.z-g.z)*p,h=(t.min.z-g.z)*p),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,s){Go.subVectors(e,t),ms.subVectors(n,t),Wo.crossVectors(Go,ms);let o=this.direction.dot(Wo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const h=a*this.direction.dot(ms.crossVectors(ii,ms));if(h<0)return null;const d=a*this.direction.dot(Go.cross(ii));if(d<0||h+d>o)return null;const u=-a*ii.dot(Wo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,s,o,a,h,d,u,p,g,m,M,E,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,d,u,p,g,m,M,E,v)}set(t,e,n,r,s,o,a,h,d,u,p,g,m,M,E,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=h,_[2]=d,_[6]=u,_[10]=p,_[14]=g,_[3]=m,_[7]=M,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),d=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const g=o*u,m=o*p,M=a*u,E=a*p;e[0]=h*u,e[4]=-h*p,e[8]=d,e[1]=m+M*d,e[5]=g-E*d,e[9]=-a*h,e[2]=E-g*d,e[6]=M+m*d,e[10]=o*h}else if(t.order==="YXZ"){const g=h*u,m=h*p,M=d*u,E=d*p;e[0]=g+E*a,e[4]=M*a-m,e[8]=o*d,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=m*a-M,e[6]=E+g*a,e[10]=o*h}else if(t.order==="ZXY"){const g=h*u,m=h*p,M=d*u,E=d*p;e[0]=g-E*a,e[4]=-o*p,e[8]=M+m*a,e[1]=m+M*a,e[5]=o*u,e[9]=E-g*a,e[2]=-o*d,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const g=o*u,m=o*p,M=a*u,E=a*p;e[0]=h*u,e[4]=M*d-m,e[8]=g*d+E,e[1]=h*p,e[5]=E*d+g,e[9]=m*d-M,e[2]=-d,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const g=o*h,m=o*d,M=a*h,E=a*d;e[0]=h*u,e[4]=E-g*p,e[8]=M*p+m,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-d*u,e[6]=m*p+M,e[10]=g-E*p}else if(t.order==="XZY"){const g=o*h,m=o*d,M=a*h,E=a*d;e[0]=h*u,e[4]=-p,e[8]=d*u,e[1]=g*p+E,e[5]=o*u,e[9]=m*p-M,e[2]=M*p-m,e[6]=a*u,e[10]=E*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ff,t,pf)}lookAt(t,e,n){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ri.crossVectors(n,je),ri.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ri.crossVectors(n,je)),ri.normalize(),_s.crossVectors(je,ri),r[0]=ri.x,r[4]=_s.x,r[8]=je.x,r[1]=ri.y,r[5]=_s.y,r[9]=je.y,r[2]=ri.z,r[6]=_s.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],h=n[8],d=n[12],u=n[1],p=n[5],g=n[9],m=n[13],M=n[2],E=n[6],v=n[10],_=n[14],b=n[3],f=n[7],c=n[11],S=n[15],l=r[0],R=r[4],w=r[8],x=r[12],y=r[1],A=r[5],T=r[9],C=r[13],L=r[2],N=r[6],O=r[10],F=r[14],k=r[3],Z=r[7],Q=r[11],J=r[15];return s[0]=o*l+a*y+h*L+d*k,s[4]=o*R+a*A+h*N+d*Z,s[8]=o*w+a*T+h*O+d*Q,s[12]=o*x+a*C+h*F+d*J,s[1]=u*l+p*y+g*L+m*k,s[5]=u*R+p*A+g*N+m*Z,s[9]=u*w+p*T+g*O+m*Q,s[13]=u*x+p*C+g*F+m*J,s[2]=M*l+E*y+v*L+_*k,s[6]=M*R+E*A+v*N+_*Z,s[10]=M*w+E*T+v*O+_*Q,s[14]=M*x+E*C+v*F+_*J,s[3]=b*l+f*y+c*L+S*k,s[7]=b*R+f*A+c*N+S*Z,s[11]=b*w+f*T+c*O+S*Q,s[15]=b*x+f*C+c*F+S*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],d=t[13],u=t[2],p=t[6],g=t[10],m=t[14],M=t[3],E=t[7],v=t[11],_=t[15],b=h*m-d*g,f=a*m-d*p,c=a*g-h*p,S=o*m-d*u,l=o*g-h*u,R=o*p-a*u;return e*(E*b-v*f+_*c)-n*(M*b-v*S+_*l)+r*(M*f-E*S+_*R)-s*(M*c-E*l+v*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],d=t[7],u=t[8],p=t[9],g=t[10],m=t[11],M=t[12],E=t[13],v=t[14],_=t[15],b=p*v*d-E*g*d+E*h*m-a*v*m-p*h*_+a*g*_,f=M*g*d-u*v*d-M*h*m+o*v*m+u*h*_-o*g*_,c=u*E*d-M*p*d+M*a*m-o*E*m-u*a*_+o*p*_,S=M*p*h-u*E*h-M*a*g+o*E*g+u*a*v-o*p*v,l=e*b+n*f+r*c+s*S;if(l===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/l;return t[0]=b*R,t[1]=(E*g*s-p*v*s-E*r*m+n*v*m+p*r*_-n*g*_)*R,t[2]=(a*v*s-E*h*s+E*r*d-n*v*d-a*r*_+n*h*_)*R,t[3]=(p*h*s-a*g*s-p*r*d+n*g*d+a*r*m-n*h*m)*R,t[4]=f*R,t[5]=(u*v*s-M*g*s+M*r*m-e*v*m-u*r*_+e*g*_)*R,t[6]=(M*h*s-o*v*s-M*r*d+e*v*d+o*r*_-e*h*_)*R,t[7]=(o*g*s-u*h*s+u*r*d-e*g*d-o*r*m+e*h*m)*R,t[8]=c*R,t[9]=(M*p*s-u*E*s-M*n*m+e*E*m+u*n*_-e*p*_)*R,t[10]=(o*E*s-M*a*s+M*n*d-e*E*d-o*n*_+e*a*_)*R,t[11]=(u*a*s-o*p*s-u*n*d+e*p*d+o*n*m-e*a*m)*R,t[12]=S*R,t[13]=(u*E*r-M*p*r+M*n*g-e*E*g-u*n*v+e*p*v)*R,t[14]=(M*a*r-o*E*r-M*n*h+e*E*h+o*n*v-e*a*v)*R,t[15]=(o*p*r-u*a*r+u*n*h-e*p*h-o*n*g+e*a*g)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,h=t.z,d=s*o,u=s*a;return this.set(d*o+n,d*a-r*h,d*h+r*a,0,d*a+r*h,u*a+n,u*h-r*o,0,d*h-r*a,u*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,d=s+s,u=o+o,p=a+a,g=s*d,m=s*u,M=s*p,E=o*u,v=o*p,_=a*p,b=h*d,f=h*u,c=h*p,S=n.x,l=n.y,R=n.z;return r[0]=(1-(E+_))*S,r[1]=(m+c)*S,r[2]=(M-f)*S,r[3]=0,r[4]=(m-c)*l,r[5]=(1-(g+_))*l,r[6]=(v+b)*l,r[7]=0,r[8]=(M+f)*R,r[9]=(v-b)*R,r[10]=(1-(g+E))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),dn.copy(this);const d=1/s,u=1/o,p=1/a;return dn.elements[0]*=d,dn.elements[1]*=d,dn.elements[2]*=d,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=p,dn.elements[9]*=p,dn.elements[10]*=p,e.setFromRotationMatrix(dn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=bn,h=!1){const d=this.elements,u=2*s/(e-t),p=2*s/(n-r),g=(e+t)/(e-t),m=(n+r)/(n-r);let M,E;if(h)M=s/(o-s),E=o*s/(o-s);else if(a===bn)M=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===mo)M=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return d[0]=u,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=bn,h=!1){const d=this.elements,u=2/(e-t),p=2/(n-r),g=-(e+t)/(e-t),m=-(n+r)/(n-r);let M,E;if(h)M=1/(o-s),E=o/(o-s);else if(a===bn)M=-2/(o-s),E=-(o+s)/(o-s);else if(a===mo)M=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return d[0]=u,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=p,d[9]=0,d[13]=m,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new U,dn=new jt,ff=new U(0,0,0),pf=new U(1,1,1),ri=new U,_s=new U,je=new U,Cc=new jt,Rc=new zi;class jn{constructor(t=0,e=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],d=r[5],u=r[9],p=r[2],g=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const Pc=new U,ji=new zi,Fn=new jt,xs=new U,Nr=new U,mf=new U,_f=new zi,Dc=new U(1,0,0),Ic=new U(0,1,0),Lc=new U(0,0,1),Uc={type:"added"},xf={type:"removed"},Ji={type:"childadded",child:null},Xo={type:"childremoved",child:null};class tn extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new U,e=new jn,n=new zi,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Xt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Nr,xs,this.up):Fn.lookAt(xs,Nr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Fn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let d=0,u=h.length;d<u;d++){const p=h[d];s(t.shapes,p)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,d=this.material.length;h<d;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),d=o(t.textures),u=o(t.images),p=o(t.shapes),g=o(t.skeletons),m=o(t.animations),M=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=r,n;function o(a){const h=[];for(const d in a){const u=a[d];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new U,On=new U,$o=new U,Bn=new U,Qi=new U,tr=new U,Nc=new U,qo=new U,Yo=new U,Ko=new U,Zo=new ce,jo=new ce,Jo=new ce;class he{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),fn.subVectors(t,e),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){fn.subVectors(r,e),On.subVectors(n,e),$o.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(On),h=fn.dot($o),d=On.dot(On),u=On.dot($o),p=o*d-a*a;if(p===0)return s.set(0,0,0),null;const g=1/p,m=(d*h-a*u)*g,M=(o*u-a*h)*g;return s.set(1-m-M,M,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,o,a,h){return this.getBarycoord(t,e,n,r,Bn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Bn.x),h.addScaledVector(o,Bn.y),h.addScaledVector(a,Bn.z),h)}static getInterpolatedAttribute(t,e,n,r,s,o){return Zo.setScalar(0),jo.setScalar(0),Jo.setScalar(0),Zo.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Jo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Zo,s.x),o.addScaledVector(jo,s.y),o.addScaledVector(Jo,s.z),o}static isFrontFacing(t,e,n,r){return fn.subVectors(n,e),On.subVectors(t,e),fn.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return he.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return he.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return he.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return he.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return he.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Qi.subVectors(r,n),tr.subVectors(s,n),qo.subVectors(t,n);const h=Qi.dot(qo),d=tr.dot(qo);if(h<=0&&d<=0)return e.copy(n);Yo.subVectors(t,r);const u=Qi.dot(Yo),p=tr.dot(Yo);if(u>=0&&p<=u)return e.copy(r);const g=h*p-u*d;if(g<=0&&h>=0&&u<=0)return o=h/(h-u),e.copy(n).addScaledVector(Qi,o);Ko.subVectors(t,s);const m=Qi.dot(Ko),M=tr.dot(Ko);if(M>=0&&m<=M)return e.copy(s);const E=m*d-h*M;if(E<=0&&d>=0&&M<=0)return a=d/(d-M),e.copy(n).addScaledVector(tr,a);const v=u*M-m*p;if(v<=0&&p-u>=0&&m-M>=0)return Nc.subVectors(s,r),a=(p-u)/(p-u+(m-M)),e.copy(r).addScaledVector(Nc,a);const _=1/(v+E+g);return o=E*_,a=g*_,e.copy(n).addScaledVector(Qi,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=rf(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Qo(o,s,t+1/3),this.g=Qo(o,s,t),this.b=Qo(o,s,t-1/3)}return Zt.colorSpaceToWorking(this,r),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Zt.workingToColorSpace(Re.copy(this),t),Math.round(Wt(Re.r*255,0,255))*65536+Math.round(Wt(Re.g*255,0,255))*256+Math.round(Wt(Re.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Re.copy(this),e);const n=Re.r,r=Re.g,s=Re.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let h,d;const u=(a+o)/2;if(a===o)h=0,d=0;else{const p=o-a;switch(d=u<=.5?p/(o+a):p/(2-o-a),o){case n:h=(r-s)/p+(r<s?6:0);break;case r:h=(s-n)/p+2;break;case s:h=(n-r)/p+4;break}h/=6}return t.h=h,t.s=d,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=on){Zt.workingToColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,r=Re.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(vs);const n=No(si.h,vs.h,e),r=No(si.s,vs.s,e),s=No(si.l,vs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new ie;ie.NAMES=Lu;let vf=0;class as extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Er,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Uu extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,Ss=new zt;let Sf=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class Nu extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fu extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yn extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yf=0;const rn=new jt,ta=new tn,er=new U,Je=new Be,Fr=new Be,Ee=new U;class Qn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?Fu:Nu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Je.min,Fr.min),Je.expandByPoint(Ee),Ee.addVectors(Je.max,Fr.max),Je.expandByPoint(Ee)):(Je.expandByPoint(Fr.min),Je.expandByPoint(Fr.max))}Je.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],h=this.morphTargetsRelative;for(let d=0,u=a.count;d<u;d++)Ee.fromBufferAttribute(a,d),h&&(er.fromBufferAttribute(t,d),Ee.add(er)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let w=0;w<n.count;w++)a[w]=new U,h[w]=new U;const d=new U,u=new U,p=new U,g=new zt,m=new zt,M=new zt,E=new U,v=new U;function _(w,x,y){d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),p.fromBufferAttribute(n,y),g.fromBufferAttribute(s,w),m.fromBufferAttribute(s,x),M.fromBufferAttribute(s,y),u.sub(d),p.sub(d),m.sub(g),M.sub(g);const A=1/(m.x*M.y-M.x*m.y);isFinite(A)&&(E.copy(u).multiplyScalar(M.y).addScaledVector(p,-m.y).multiplyScalar(A),v.copy(p).multiplyScalar(m.x).addScaledVector(u,-M.x).multiplyScalar(A),a[w].add(E),a[x].add(E),a[y].add(E),h[w].add(v),h[x].add(v),h[y].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,x=b.length;w<x;++w){const y=b[w],A=y.start,T=y.count;for(let C=A,L=A+T;C<L;C+=3)_(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const f=new U,c=new U,S=new U,l=new U;function R(w){S.fromBufferAttribute(r,w),l.copy(S);const x=a[w];f.copy(x),f.sub(S.multiplyScalar(S.dot(x))).normalize(),c.crossVectors(l,x);const A=c.dot(h[w])<0?-1:1;o.setXYZW(w,f.x,f.y,f.z,A)}for(let w=0,x=b.length;w<x;++w){const y=b[w],A=y.start,T=y.count;for(let C=A,L=A+T;C<L;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,m=n.count;g<m;g++)n.setXYZ(g,0,0,0);const r=new U,s=new U,o=new U,a=new U,h=new U,d=new U,u=new U,p=new U;if(t)for(let g=0,m=t.count;g<m;g+=3){const M=t.getX(g+0),E=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,E),o.fromBufferAttribute(e,v),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,v),a.add(u),h.add(u),d.add(u),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(v,d.x,d.y,d.z)}else for(let g=0,m=e.count;g<m;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),n.setXYZ(g+0,u.x,u.y,u.z),n.setXYZ(g+1,u.x,u.y,u.z),n.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,h){const d=a.array,u=a.itemSize,p=a.normalized,g=new d.constructor(h.length*u);let m=0,M=0;for(let E=0,v=h.length;E<v;E++){a.isInterleavedBufferAttribute?m=h[E]*a.data.stride+a.offset:m=h[E]*u;for(let _=0;_<u;_++)g[M++]=d[m++]}return new $e(g,u,p)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qn,n=this.index.array,r=this.attributes;for(const a in r){const h=r[a],d=t(h,n);e.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const h=[],d=s[a];for(let u=0,p=d.length;u<p;u++){const g=d[u],m=t(g,n);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const d=o[a];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const d=n[h];t.data.attributes[h]=d.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],u=[];for(let p=0,g=d.length;p<g;p++){const m=d[p];u.push(m.toJSON(t.data))}u.length>0&&(r[h]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(e))}const s=t.morphAttributes;for(const d in s){const u=[],p=s[d];for(let g=0,m=p.length;g<m;g++)u.push(p[g].clone(e));this.morphAttributes[d]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let d=0,u=o.length;d<u;d++){const p=o[d];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new jt,Mi=new os,ys=new jl,Oc=new U,Ms=new U,Es=new U,bs=new U,ea=new U,As=new U,Bc=new U,Ts=new U;class qe extends tn{constructor(t=new Qn,e=new Uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){As.set(0,0,0);for(let h=0,d=s.length;h<d;h++){const u=a[h],p=s[h];u!==0&&(ea.fromBufferAttribute(p,t),o?As.addScaledVector(ea,u):As.addScaledVector(ea.sub(e),u))}e.add(As)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(ys.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ys,Oc)===null||Mi.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,d=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,g=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,E=g.length;M<E;M++){const v=g[M],_=o[v.materialIndex],b=Math.max(v.start,m.start),f=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let c=b,S=f;c<S;c+=3){const l=a.getX(c),R=a.getX(c+1),w=a.getX(c+2);r=ws(this,_,t,n,d,u,p,l,R,w),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const M=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let v=M,_=E;v<_;v+=3){const b=a.getX(v),f=a.getX(v+1),c=a.getX(v+2);r=ws(this,o,t,n,d,u,p,b,f,c),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let M=0,E=g.length;M<E;M++){const v=g[M],_=o[v.materialIndex],b=Math.max(v.start,m.start),f=Math.min(h.count,Math.min(v.start+v.count,m.start+m.count));for(let c=b,S=f;c<S;c+=3){const l=c,R=c+1,w=c+2;r=ws(this,_,t,n,d,u,p,l,R,w),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const M=Math.max(0,m.start),E=Math.min(h.count,m.start+m.count);for(let v=M,_=E;v<_;v+=3){const b=v,f=v+1,c=v+2;r=ws(this,o,t,n,d,u,p,b,f,c),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function Mf(i,t,e,n,r,s,o,a){let h;if(t.side===Fe?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,t.side===Pn,a),h===null)return null;Ts.copy(a),Ts.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Ts);return d<e.near||d>e.far?null:{distance:d,point:Ts.clone(),object:i}}function ws(i,t,e,n,r,s,o,a,h,d){i.getVertexPosition(a,Ms),i.getVertexPosition(h,Es),i.getVertexPosition(d,bs);const u=Mf(i,t,e,n,Ms,Es,bs,Bc);if(u){const p=new U;he.getBarycoord(Bc,Ms,Es,bs,p),r&&(u.uv=he.getInterpolatedAttribute(r,a,h,d,p,new zt)),s&&(u.uv1=he.getInterpolatedAttribute(s,a,h,d,p,new zt)),o&&(u.normal=he.getInterpolatedAttribute(o,a,h,d,p,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const g={a,b:h,c:d,normal:new U,materialIndex:0};he.getNormal(Ms,Es,bs,g.normal),u.face=g,u.barycoord=p}return u}class Gi extends Qn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],d=[],u=[],p=[];let g=0,m=0;M("z","y","x",-1,-1,n,e,t,o,s,0),M("z","y","x",1,-1,n,e,-t,o,s,1),M("x","z","y",1,1,t,n,e,r,o,2),M("x","z","y",1,-1,t,n,-e,r,o,3),M("x","y","z",1,-1,t,e,n,r,s,4),M("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Yn(d,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(p,2));function M(E,v,_,b,f,c,S,l,R,w,x){const y=c/R,A=S/w,T=c/2,C=S/2,L=l/2,N=R+1,O=w+1;let F=0,k=0;const Z=new U;for(let Q=0;Q<O;Q++){const J=Q*A-C;for(let st=0;st<N;st++){const ht=st*y-T;Z[E]=ht*b,Z[v]=J*f,Z[_]=L,d.push(Z.x,Z.y,Z.z),Z[E]=0,Z[v]=0,Z[_]=l>0?1:-1,u.push(Z.x,Z.y,Z.z),p.push(st/R),p.push(1-Q/w),F+=1}}for(let Q=0;Q<w;Q++)for(let J=0;J<R;J++){const st=g+J+N*Q,ht=g+J+N*(Q+1),yt=g+(J+1)+N*(Q+1),vt=g+(J+1)+N*Q;h.push(st,ht,vt),h.push(ht,yt,vt),k+=6}a.addGroup(m,k,x),m+=k,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Rr(i[e]);for(const r in n)t[r]=n[r]}return t}function Ef(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const bf={clone:Rr,merge:Ue};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bu extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new U,zc=new zt,Vc=new zt;class an extends Bu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,zc,Vc),e.subVectors(Vc,zc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*n/d,r*=o.width/h,n*=o.height/d}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const nr=-90,ir=1;class wf extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(nr,ir,t,e);r.layers=this.layers,this.add(r);const s=new an(nr,ir,t,e);s.layers=this.layers,this.add(s);const o=new an(nr,ir,t,e);o.layers=this.layers,this.add(o);const a=new an(nr,ir,t,e);a.layers=this.layers,this.add(a);const h=new an(nr,ir,t,e);h.layers=this.layers,this.add(h);const d=new an(nr,ir,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,h]=e;for(const d of e)this.remove(d);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,d,u]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,d),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(p,g,m),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class zu extends Oe{constructor(t=[],e=Bi,n,r,s,o,a,h,d,u){super(t,e,n,r,s,o,a,h,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vu extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new zu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gi(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:$n});s.uniforms.tEquirect.value=e;const o=new qe(r,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Pe),new wf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Cs extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){o=!0;for(const E of t.hand.values()){const v=e.getJointPose(E,n),_=this._getHandJoint(d,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const u=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],g=u.position.distanceTo(p.position),m=.02,M=.005;d.inputState.pinching&&g>m+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=m-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rf extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pf extends Oe{constructor(t=null,e=1,n=1,r,s,o,a,h,d=we,u=we,p,g){super(null,o,a,h,d,u,r,s,p,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ia=new U,Df=new U,If=new Xt;class ln{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ia.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||If.getNormalMatrix(t),r=this.coplanarPoint(ia).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new jl,Lf=new zt(.5,.5),Rs=new U;class Hu{constructor(t=new ln,e=new ln,n=new ln,r=new ln,s=new ln,o=new ln){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],h=s[2],d=s[3],u=s[4],p=s[5],g=s[6],m=s[7],M=s[8],E=s[9],v=s[10],_=s[11],b=s[12],f=s[13],c=s[14],S=s[15];if(r[0].setComponents(d-o,m-u,_-M,S-b).normalize(),r[1].setComponents(d+o,m+u,_+M,S+b).normalize(),r[2].setComponents(d+a,m+p,_+E,S+f).normalize(),r[3].setComponents(d-a,m-p,_-E,S-f).normalize(),n)r[4].setComponents(h,g,v,c).normalize(),r[5].setComponents(d-h,m-g,_-v,S-c).normalize();else if(r[4].setComponents(d-h,m-g,_-v,S-c).normalize(),e===bn)r[5].setComponents(d+h,m+g,_+v,S+c).normalize();else if(e===mo)r[5].setComponents(h,g,v,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=Lf.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Rs.x=r.normal.x>0?t.max.x:t.min.x,Rs.y=r.normal.y>0?t.max.y:t.min.y,Rs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ts extends Oe{constructor(t,e,n=Dn,r,s,o,a=we,h=we,d,u=Zn,p=1){if(u!==Zn&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,r,s,o,a,h,u,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Uf extends ts{constructor(t,e=Dn,n=Bi,r,s,o=we,a=we,h,d=Zn){const u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,h,d),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ku extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bo extends Qn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),h=Math.floor(r),d=a+1,u=h+1,p=t/a,g=e/h,m=[],M=[],E=[],v=[];for(let _=0;_<u;_++){const b=_*g-o;for(let f=0;f<d;f++){const c=f*p-s;M.push(c,-b,0),E.push(0,0,1),v.push(f/a),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<a;b++){const f=b+d*_,c=b+d*(_+1),S=b+1+d*(_+1),l=b+1+d*_;m.push(f,c,l),m.push(c,S,l)}this.setIndex(m),this.setAttribute("position",new Yn(M,3)),this.setAttribute("normal",new Yn(E,3)),this.setAttribute("uv",new Yn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nf extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gu extends as{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ff extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Of extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wu extends Bu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bf extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kc=new U,Ps=new U,rr=new U,sr=new U,ra=new U,zf=new U,Vf=new U;class Te{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){kc.subVectors(t,this.start),Ps.subVectors(this.end,this.start);const n=Ps.dot(Ps);let s=Ps.dot(kc)/n;return e&&(s=Wt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=zf,n=Vf){const r=10000000000000001e-32;let s,o;const a=this.start,h=t.start,d=this.end,u=t.end;rr.subVectors(d,a),sr.subVectors(u,h),ra.subVectors(a,h);const p=rr.dot(rr),g=sr.dot(sr),m=sr.dot(ra);if(p<=r&&g<=r)return e.copy(a),n.copy(h),e.sub(n),e.dot(e);if(p<=r)s=0,o=m/g,o=Wt(o,0,1);else{const M=rr.dot(ra);if(g<=r)o=0,s=Wt(-M/p,0,1);else{const E=rr.dot(sr),v=p*g-E*E;v!==0?s=Wt((E*m-M*g)/v,0,1):s=0,o=(E*s+m)/g,o<0?(o=0,s=Wt(-M/p,0,1)):o>1&&(o=1,s=Wt((E-M)/p,0,1))}}return e.copy(a).add(rr.multiplyScalar(s)),n.copy(h).add(sr.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Hf extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){kt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Gc(i,t,e,n){const r=kf(n);switch(e){case Tu:return i*t;case Cu:return i*t/r.components*r.byteLength;case Xl:return i*t/r.components*r.byteLength;case wr:return i*t*2/r.components*r.byteLength;case $l:return i*t*2/r.components*r.byteLength;case wu:return i*t*3/r.components*r.byteLength;case xn:return i*t*4/r.components*r.byteLength;case ql:return i*t*4/r.components*r.byteLength;case io:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case Qa:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Ja:return Math.max(i,8)*Math.max(t,8)/2;case tl:case el:case il:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nl:case sl:case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yl:case Ml:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tl:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kf(i){switch(i){case cn:case Mu:return{byteLength:1,components:1};case jr:case Eu:case Kn:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case Dn:case kl:case En:return{byteLength:4,components:1};case bu:case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rs}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rs);function Xu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Gf(i){const t=new WeakMap;function e(a,h){const d=a.array,u=a.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),a.onUploadCallback();let m;if(d instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)m=i.HALF_FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=i.SHORT;else if(d instanceof Uint32Array)m=i.UNSIGNED_INT;else if(d instanceof Int32Array)m=i.INT;else if(d instanceof Int8Array)m=i.BYTE;else if(d instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,h,d){const u=h.array,p=h.updateRanges;if(i.bindBuffer(d,a),p.length===0)i.bufferSubData(d,0,u);else{p.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<p.length;m++){const M=p[g],E=p[m];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,p[g]=E)}p.length=g+1;for(let m=0,M=p.length;m<M;m++){const E=p[m];i.bufferSubData(d,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=t.get(a);if(d===void 0)t.set(a,e(a,h));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,a,h),d.version=a.version}}return{get:r,remove:s,update:o}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:$f,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Kf,aomap_fragment:Zf,aomap_pars_fragment:jf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:rp,clipping_planes_fragment:sp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:gp,displacementmap_pars_vertex:mp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:Sp,colorspace_pars_fragment:yp,envmap_fragment:Mp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:bp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Fp,envmap_vertex:Tp,fog_vertex:wp,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Hp,lights_physical_pars_fragment:kp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:jp,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:mg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Sg,dithering_fragment:yg,dithering_pars_fragment:Mg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Tg,shadowmap_vertex:wg,shadowmask_pars_fragment:Cg,skinbase_vertex:Rg,skinning_pars_vertex:Pg,skinning_vertex:Dg,skinnormal_vertex:Ig,specularmap_fragment:Lg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:Vg,uv_vertex:Hg,worldpos_vertex:kg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:$g,cube_vert:qg,cube_frag:Yg,depth_vert:Kg,depth_frag:Zg,distance_vert:jg,distance_frag:Jg,equirect_vert:Qg,equirect_frag:tm,linedashed_vert:em,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:rm,meshlambert_vert:sm,meshlambert_frag:om,meshmatcap_vert:am,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:gm,meshtoon_frag:mm,points_vert:_m,points_frag:xm,shadow_vert:vm,shadow_frag:Sm,sprite_vert:ym,sprite_frag:Mm},mt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},yn={basic:{uniforms:Ue([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ue([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ie(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ue([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ue([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ue([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ie(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ue([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ue([mt.points,mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ue([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ue([mt.common,mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ue([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ue([mt.sprite,mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ue([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ue([mt.lights,mt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};yn.physical={uniforms:Ue([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ds={r:0,b:0,g:0},bi=new jn,Em=new jt;function bm(i,t,e,n,r,s,o){const a=new ie(0);let h=s===!0?0:1,d,u,p=null,g=0,m=null;function M(f){let c=f.isScene===!0?f.background:null;return c&&c.isTexture&&(c=(f.backgroundBlurriness>0?e:t).get(c)),c}function E(f){let c=!1;const S=M(f);S===null?_(a,h):S&&S.isColor&&(_(S,1),c=!0);const l=i.xr.getEnvironmentBlendMode();l==="additive"?n.buffers.color.setClear(0,0,0,1,o):l==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||c)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(f,c){const S=M(c);S&&(S.isCubeTexture||S.mapping===Eo)?(u===void 0&&(u=new qe(new Gi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Rr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(l,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(c.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(bi)),u.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ne,(p!==S||g!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=S,g=S.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(d===void 0&&(d=new qe(new bo(2,2),new In({name:"BackgroundMaterial",uniforms:Rr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=S,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),d.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||g!==S.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=S,g=S.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null))}function _(f,c){f.getRGB(Ds,Ou(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,c,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(f,c=1){a.set(f),h=c,_(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(a,h)},render:E,addToRenderList:v,dispose:b}}function Am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function a(y,A,T,C,L){let N=!1;const O=p(C,T,A);s!==O&&(s=O,d(s.object)),N=m(y,C,T,L),N&&M(y,C,T,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,c(y,A,T,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function h(){return i.createVertexArray()}function d(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function p(y,A,T){const C=T.wireframe===!0;let L=n[y.id];L===void 0&&(L={},n[y.id]=L);let N=L[A.id];N===void 0&&(N={},L[A.id]=N);let O=N[C];return O===void 0&&(O=g(h()),N[C]=O),O}function g(y){const A=[],T=[],C=[];for(let L=0;L<e;L++)A[L]=0,T[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:T,attributeDivisors:C,object:y,attributes:{},index:null}}function m(y,A,T,C){const L=s.attributes,N=A.attributes;let O=0;const F=T.getAttributes();for(const k in F)if(F[k].location>=0){const Q=L[k];let J=N[k];if(J===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),Q===void 0||Q.attribute!==J||J&&Q.data!==J.data)return!0;O++}return s.attributesNum!==O||s.index!==C}function M(y,A,T,C){const L={},N=A.attributes;let O=0;const F=T.getAttributes();for(const k in F)if(F[k].location>=0){let Q=N[k];Q===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const J={};J.attribute=Q,Q&&Q.data&&(J.data=Q.data),L[k]=J,O++}s.attributes=L,s.attributesNum=O,s.index=C}function E(){const y=s.newAttributes;for(let A=0,T=y.length;A<T;A++)y[A]=0}function v(y){_(y,0)}function _(y,A){const T=s.newAttributes,C=s.enabledAttributes,L=s.attributeDivisors;T[y]=1,C[y]===0&&(i.enableVertexAttribArray(y),C[y]=1),L[y]!==A&&(i.vertexAttribDivisor(y,A),L[y]=A)}function b(){const y=s.newAttributes,A=s.enabledAttributes;for(let T=0,C=A.length;T<C;T++)A[T]!==y[T]&&(i.disableVertexAttribArray(T),A[T]=0)}function f(y,A,T,C,L,N,O){O===!0?i.vertexAttribIPointer(y,A,T,L,N):i.vertexAttribPointer(y,A,T,C,L,N)}function c(y,A,T,C){E();const L=C.attributes,N=T.getAttributes(),O=A.defaultAttributeValues;for(const F in N){const k=N[F];if(k.location>=0){let Z=L[F];if(Z===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const Q=Z.normalized,J=Z.itemSize,st=t.get(Z);if(st===void 0)continue;const ht=st.buffer,yt=st.type,vt=st.bytesPerElement,q=yt===i.INT||yt===i.UNSIGNED_INT||Z.gpuType===kl;if(Z.isInterleavedBufferAttribute){const K=Z.data,et=K.stride,at=Z.offset;if(K.isInstancedInterleavedBuffer){for(let nt=0;nt<k.locationSize;nt++)_(k.location+nt,K.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<k.locationSize;nt++)v(k.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let nt=0;nt<k.locationSize;nt++)f(k.location+nt,J/k.locationSize,yt,Q,et*vt,(at+J/k.locationSize*nt)*vt,q)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)_(k.location+K,Z.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<k.locationSize;K++)v(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let K=0;K<k.locationSize;K++)f(k.location+K,J/k.locationSize,yt,Q,J*vt,J/k.locationSize*K*vt,q)}}else if(O!==void 0){const Q=O[F];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(k.location,Q);break;case 3:i.vertexAttrib3fv(k.location,Q);break;case 4:i.vertexAttrib4fv(k.location,Q);break;default:i.vertexAttrib1fv(k.location,Q)}}}}b()}function S(){w();for(const y in n){const A=n[y];for(const T in A){const C=A[T];for(const L in C)u(C[L].object),delete C[L];delete A[T]}delete n[y]}}function l(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const T in A){const C=A[T];for(const L in C)u(C[L].object),delete C[L];delete A[T]}delete n[y.id]}function R(y){for(const A in n){const T=n[A];if(T[y.id]===void 0)continue;const C=T[y.id];for(const L in C)u(C[L].object),delete C[L];delete T[y.id]}}function w(){x(),o=!0,s!==r&&(s=r,d(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:l,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:v,disableUnusedAttributes:b}}function Tm(i,t,e){let n;function r(d){n=d}function s(d,u){i.drawArrays(n,d,u),e.update(u,n,1)}function o(d,u,p){p!==0&&(i.drawArraysInstanced(n,d,u,p),e.update(u,n,p))}function a(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,u,0,p);let m=0;for(let M=0;M<p;M++)m+=u[M];e.update(m,n,1)}function h(d,u,p,g){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<d.length;M++)o(d[M],u[M],g[M]);else{m.multiDrawArraysInstancedWEBGL(n,d,0,u,0,g,0,p);let M=0;for(let E=0;E<p;E++)M+=u[E]*g[E];e.update(M,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function wm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const w=R===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!w)}function h(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const u=h(d);u!==d&&(kt("WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const p=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),l=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:f,maxFragmentUniforms:c,maxSamples:S,samples:l}}function Cm(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ln,a=new Xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const m=p.length!==0||g||n!==0||r;return r=g,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){e=u(p,g,0)},this.setState=function(p,g,m){const M=p.clippingPlanes,E=p.clipIntersection,v=p.clipShadows,_=i.get(p);if(!r||M===null||M.length===0||s&&!v)s?u(null):d();else{const b=s?0:n,f=b*4;let c=_.clippingState||null;h.value=c,c=u(M,g,f,m);for(let S=0;S!==f;++S)c[S]=e[S];_.clippingState=c,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,g,m,M){const E=p!==null?p.length:0;let v=null;if(E!==0){if(v=h.value,M!==!0||v===null){const _=m+E*4,b=g.matrixWorldInverse;a.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let f=0,c=m;f!==E;++f,c+=4)o.copy(p[f]).applyMatrix4(b,a),o.normal.toArray(v,c),v[c+3]=o.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,v}}function Rm(i){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Bi:a===qa&&(o.mapping=Tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===qa)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const d=new Vu(h.height);return d.fromEquirectangularTexture(i,o),t.set(o,d),o.addEventListener("dispose",r),e(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const fi=4,Wc=[.125,.215,.35,.446,.526,.582],Li=20,Pm=256,Or=new Wu,Xc=new ie;let sa=null,oa=0,aa=0,la=!1;const Dm=new U;class $c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Dm}=s;sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,oa,aa),this._renderer.xr.enabled=la,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Kn,format:xn,colorSpace:Cr,depthBuffer:!1},r=qc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Im(s)),this._blurMaterial=Um(s,t,e),this._ggxMaterial=Lm(s,t,e)}return r}_compileMaterial(t){const e=new qe(new Qn,t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,r,s){const h=new an(90,1,e,n),d=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Xc),p.toneMapping=wn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new Gi,new Uu({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let _=!1;const b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,_=!0):(v.color.copy(Xc),_=!0);for(let f=0;f<6;f++){const c=f%3;c===0?(h.up.set(0,d[f],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+u[f],s.y,s.z)):c===1?(h.up.set(0,0,d[f]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+u[f],s.z)):(h.up.set(0,d[f],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+u[f]));const S=this._cubeSize;or(r,c*S,f>2?S:0,S,S),p.setRenderTarget(r),_&&p.render(E,h),p.render(t,h)}p.toneMapping=m,p.autoClear=g,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Bi||t.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const h=this._cubeSize;or(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const h=o.uniforms,d=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(d*d-u*u),g=0+d*1.25,m=p*g,{_lodMax:M}=this,E=this._sizeLods[n],v=3*E*(n>M-fi?n-M+fi:0),_=4*(this._cubeSize-E);h.envMap.value=t.texture,h.roughness.value=m,h.mipInt.value=M-e,or(s,v,_,3*E,2*E),r.setRenderTarget(s),r.render(a,Or),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=M-n,or(t,v,_,3*E,2*E),r.setRenderTarget(t),r.render(a,Or)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const h=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const u=3,p=this._lodMeshes[r];p.material=d;const g=d.uniforms,m=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Li-1),E=s/M,v=isFinite(s)?1+Math.floor(u*E):Li;v>Li&&kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Li}`);const _=[];let b=0;for(let R=0;R<Li;++R){const w=R/E,x=Math.exp(-w*w/2);_.push(x),R===0?b+=x:R<v&&(b+=2*x)}for(let R=0;R<_.length;R++)_[R]=_[R]/b;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:f}=this;g.dTheta.value=M,g.mipInt.value=f-n;const c=this._sizeLods[r],S=3*c*(r>f-fi?r-f+fi:0),l=4*(this._cubeSize-c);or(e,S,l,3*c,2*c),h.setRenderTarget(e),h.render(p,Or)}}function Im(i){const t=[],e=[],n=[];let r=i;const s=i-fi+1+Wc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let h=1/a;o>i-fi?h=Wc[o-i+fi-1]:o===0&&(h=0),e.push(h);const d=1/(a-2),u=-d,p=1+d,g=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,M=6,E=3,v=2,_=1,b=new Float32Array(E*M*m),f=new Float32Array(v*M*m),c=new Float32Array(_*M*m);for(let l=0;l<m;l++){const R=l%3*2/3-1,w=l>2?0:-1,x=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];b.set(x,E*M*l),f.set(g,v*M*l);const y=[l,l,l,l,l,l];c.set(y,_*M*l)}const S=new Qn;S.setAttribute("position",new $e(b,E)),S.setAttribute("uv",new $e(f,v)),S.setAttribute("faceIndex",new $e(c,_)),n.push(new qe(S,null)),r>fi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function qc(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Lm(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ao(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Um(i,t,e){const n=new Float32Array(Li),r=new U(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Yc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Kc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,d=h===$a||h===qa,u=h===Bi||h===Tr;if(d||u){let p=t.get(a);const g=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return e===null&&(e=new $c(i)),p=d?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return d&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new $c(i)),p=d?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let h=0;const d=6;for(let u=0;u<d;u++)a[u]!==void 0&&h++;return h===d}function s(a){const h=a.target;h.removeEventListener("dispose",s);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Qr("WebGLRenderer: "+n+" extension not supported."),r}}}function Om(i,t,e,n){const r={},s=new WeakMap;function o(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",o),delete r[g.id];const m=s.get(g);m&&(t.remove(m),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(p,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,e.memory.geometries++),g}function h(p){const g=p.attributes;for(const m in g)t.update(g[m],i.ARRAY_BUFFER)}function d(p){const g=[],m=p.index,M=p.attributes.position;let E=0;if(m!==null){const b=m.array;E=m.version;for(let f=0,c=b.length;f<c;f+=3){const S=b[f+0],l=b[f+1],R=b[f+2];g.push(S,l,l,R,R,S)}}else if(M!==void 0){const b=M.array;E=M.version;for(let f=0,c=b.length/3-1;f<c;f+=3){const S=f+0,l=f+1,R=f+2;g.push(S,l,l,R,R,S)}}else return;const v=new(Pu(g)?Fu:Nu)(g,1);v.version=E;const _=s.get(p);_&&t.remove(_),s.set(p,v)}function u(p){const g=s.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return s.get(p)}return{get:a,update:h,getWireframeAttribute:u}}function Bm(i,t,e){let n;function r(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function h(g,m){i.drawElements(n,m,s,g*o),e.update(m,n,1)}function d(g,m,M){M!==0&&(i.drawElementsInstanced(n,m,s,g*o,M),e.update(m,n,M))}function u(g,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,g,0,M);let v=0;for(let _=0;_<M;_++)v+=m[_];e.update(v,n,1)}function p(g,m,M,E){if(M===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<g.length;_++)d(g[_]/o,m[_],E[_]);else{v.multiDrawElementsInstancedWEBGL(n,m,0,s,g,0,E,0,M);let _=0;for(let b=0;b<M;b++)_+=m[b]*E[b];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=h,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function zm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Vm(i,t,e){const n=new WeakMap,r=new ce;function s(o,a,h){const d=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let g=n.get(a);if(g===void 0||g.count!==p){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;g!==void 0&&g.texture.dispose();const M=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],f=a.morphAttributes.color||[];let c=0;M===!0&&(c=1),E===!0&&(c=2),v===!0&&(c=3);let S=a.attributes.position.count*c,l=1;S>t.maxTextureSize&&(l=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*l*4*p),w=new Du(R,S,l,p);w.type=En,w.needsUpdate=!0;const x=c*4;for(let A=0;A<p;A++){const T=_[A],C=b[A],L=f[A],N=S*l*4*A;for(let O=0;O<T.count;O++){const F=O*x;M===!0&&(r.fromBufferAttribute(T,O),R[N+F+0]=r.x,R[N+F+1]=r.y,R[N+F+2]=r.z,R[N+F+3]=0),E===!0&&(r.fromBufferAttribute(C,O),R[N+F+4]=r.x,R[N+F+5]=r.y,R[N+F+6]=r.z,R[N+F+7]=0),v===!0&&(r.fromBufferAttribute(L,O),R[N+F+8]=r.x,R[N+F+9]=r.y,R[N+F+10]=r.z,R[N+F+11]=L.itemSize===4?r.w:1)}}g={count:p,texture:w,size:new zt(S,l)},n.set(a,g),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let v=0;v<d.length;v++)M+=d[v];const E=a.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function Hm(i,t,e,n){let r=new WeakMap;function s(h){const d=n.render.frame,u=h.geometry,p=t.get(h,u);if(r.get(p)!==d&&(t.update(p),r.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return p}function o(){r=new WeakMap}function a(h){const d=h.target;d.removeEventListener("dispose",a),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:s,dispose:o}}const km={[pu]:"LINEAR_TONE_MAPPING",[gu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[_u]:"ACES_FILMIC_TONE_MAPPING",[vu]:"AGX_TONE_MAPPING",[Su]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function Gm(i,t,e,n,r){const s=new Cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Cn(t,e,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),a=new Qn;a.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const h=new Nf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qe(a,h),u=new Wu(-1,1,1,-1,0,1);let p=null,g=null,m=!1,M,E=null,v=[],_=!1;this.setSize=function(b,f){s.setSize(b,f),o.setSize(b,f);for(let c=0;c<v.length;c++){const S=v[c];S.setSize&&S.setSize(b,f)}},this.setEffects=function(b){v=b,_=v.length>0&&v[0].isRenderPass===!0;const f=s.width,c=s.height;for(let S=0;S<v.length;S++){const l=v[S];l.setSize&&l.setSize(f,c)}},this.begin=function(b,f){if(m||b.toneMapping===wn&&v.length===0)return!1;if(E=f,f!==null){const c=f.width,S=f.height;(s.width!==c||s.height!==S)&&this.setSize(c,S)}return _===!1&&b.setRenderTarget(s),M=b.toneMapping,b.toneMapping=wn,!0},this.hasRenderPass=function(){return _},this.end=function(b,f){b.toneMapping=M,m=!0;let c=s,S=o;for(let l=0;l<v.length;l++){const R=v[l];if(R.enabled!==!1&&(R.render(b,S,c,f),R.needsSwap!==!1)){const w=c;c=S,S=w}}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,h.defines={},Zt.getTransfer(p)===ne&&(h.defines.SRGB_TRANSFER="");const l=km[g];l&&(h.defines[l]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=c.texture,b.setRenderTarget(E),b.render(d,u),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),h.dispose()}}const $u=new Oe,Rl=new ts(1,1),qu=new Du,Yu=new uf,Ku=new zu,Zc=[],jc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),th=new Float32Array(4);function Pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;th.set(n),i.uniformMatrix2fv(this.addr,!1,th),Me(e,n)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Qc.set(n),i.uniformMatrix3fv(this.addr,!1,Qc),Me(e,n)}}function Zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),Me(e,n)}}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function e_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function r_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function s_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Rl.compareFunction=e.isReversedDepthBuffer()?Kl:Yl,s=Rl):s=$u,e.setTexture2D(t||s,r)}function o_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Yu,r)}function a_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ku,r)}function l_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||qu,r)}function c_(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return $m;case 35666:return qm;case 35674:return Ym;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return jm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return t_;case 5125:return e_;case 36294:return n_;case 36295:return i_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(i,t){i.uniform1fv(this.addr,t)}function u_(i,t){const e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function d_(i,t){const e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function f_(i,t){const e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function p_(i,t){const e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g_(i,t){const e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m_(i,t){const e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function __(i,t){i.uniform1iv(this.addr,t)}function x_(i,t){i.uniform2iv(this.addr,t)}function v_(i,t){i.uniform3iv(this.addr,t)}function S_(i,t){i.uniform4iv(this.addr,t)}function y_(i,t){i.uniform1uiv(this.addr,t)}function M_(i,t){i.uniform2uiv(this.addr,t)}function E_(i,t){i.uniform3uiv(this.addr,t)}function b_(i,t){i.uniform4uiv(this.addr,t)}function A_(i,t,e){const n=this.cache,r=t.length,s=To(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Rl:o=$u;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function T_(i,t,e){const n=this.cache,r=t.length,s=To(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Yu,s[o])}function w_(i,t,e){const n=this.cache,r=t.length,s=To(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ku,s[o])}function C_(i,t,e){const n=this.cache,r=t.length,s=To(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||qu,s[o])}function R_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return g_;case 35676:return m_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return S_;case 5125:return y_;case 36294:return M_;case 36295:return E_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return C_}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c_(e.type)}}class D_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}}class I_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function eh(i,t){i.seq.push(t),i.map[t.id]=t}function L_(i,t,e){const n=i.name,r=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),o=ca.lastIndex;let a=s[1];const h=s[2]==="]",d=s[3];if(h&&(a=a|0),d===void 0||d==="["&&o+2===r){eh(e,d===void 0?new P_(a,i,t):new D_(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new I_(a),eh(e,p)),e=p}}}class lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);L_(a,h,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function nh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const U_=37297;let N_=0;function F_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ih=new Xt;function O_(i){Zt._getMatrix(ih,Zt.workingColorSpace,i);const t=`mat3( ${ih.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+F_(i.getShaderSource(t),a)}else return s}function B_(i,t){const e=O_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const z_={[pu]:"Linear",[gu]:"Reinhard",[mu]:"Cineon",[_u]:"ACESFilmic",[vu]:"AgX",[Su]:"Neutral",[xu]:"Custom"};function V_(i,t){const e=z_[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new U;function H_(){Zt.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function G_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function sh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(X_,q_)}const $_=new Map;function q_(i,t){let e=$t[t];if(e===void 0){const n=$_.get(t);if(n!==void 0)e=$t[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}const Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(Y_,K_)}function K_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Z_={[no]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function j_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J_={[Bi]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function Q_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const t0={[Tr]:"ENVMAP_MODE_REFRACTION"};function e0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n0={[fu]:"ENVMAP_BLENDING_MULTIPLY",[Wd]:"ENVMAP_BLENDING_MIX",[Xd]:"ENVMAP_BLENDING_ADD"};function i0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n0[i.combine]||"ENVMAP_BLENDING_NONE"}function r0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s0(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=j_(e),d=Q_(e),u=e0(e),p=i0(e),g=r0(e),m=k_(e),M=G_(s),E=r.createProgram();let v,_,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Yr).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Yr).join(`
`),_.length>0&&(_+=`
`)):(v=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),_=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?$t.tonemapping_pars_fragment:"",e.toneMapping!==wn?V_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,B_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Pl(o),o=sh(o,e),o=oh(o,e),a=Pl(a),a=sh(a,e),a=oh(a,e),o=ah(o),a=ah(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const f=b+v+o,c=b+_+a,S=nh(r,r.VERTEX_SHADER,f),l=nh(r,r.FRAGMENT_SHADER,c);r.attachShader(E,S),r.attachShader(E,l),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(A){if(i.debug.checkShaderErrors){const T=r.getProgramInfoLog(E)||"",C=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(l)||"",N=T.trim(),O=C.trim(),F=L.trim();let k=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,S,l);else{const Q=rh(r,S,"vertex"),J=rh(r,l,"fragment");Qt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+Q+`
`+J)}else N!==""?kt("WebGLProgram: Program Info Log:",N):(O===""||F==="")&&(Z=!1);Z&&(A.diagnostics={runnable:k,programLog:N,vertexShader:{log:O,prefix:v},fragmentShader:{log:F,prefix:_}})}r.deleteShader(S),r.deleteShader(l),w=new lo(r,E),x=W_(r,E)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(E,U_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N_++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=l,this}let o0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new l0(t),e.set(t,n)),n}}class l0{constructor(t){this.id=o0++,this.code=t,this.usedTimes=0}}function c0(i,t,e,n,r,s,o){const a=new Iu,h=new a0,d=new Set,u=[],p=new Map,g=r.logarithmicDepthBuffer;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(x){return d.add(x),x===0?"uv":`uv${x}`}function v(x,y,A,T,C){const L=T.fog,N=C.geometry,O=x.isMeshStandardMaterial?T.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||O),k=F&&F.mapping===Eo?F.image.height:null,Z=M[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=Q!==void 0?Q.length:0;let st=0;N.morphAttributes.position!==void 0&&(st=1),N.morphAttributes.normal!==void 0&&(st=2),N.morphAttributes.color!==void 0&&(st=3);let ht,yt,vt,q;if(Z){const te=yn[Z];ht=te.vertexShader,yt=te.fragmentShader}else ht=x.vertexShader,yt=x.fragmentShader,h.update(x),vt=h.getVertexShaderID(x),q=h.getFragmentShaderID(x);const K=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),at=C.isInstancedMesh===!0,nt=C.isBatchedMesh===!0,Et=!!x.map,Kt=!!x.matcap,At=!!F,Rt=!!x.aoMap,Pt=!!x.lightMap,St=!!x.bumpMap,Ut=!!x.normalMap,B=!!x.displacementMap,Ht=!!x.emissiveMap,It=!!x.metalnessMap,Ot=!!x.roughnessMap,lt=x.anisotropy>0,I=x.clearcoat>0,P=x.dispersion>0,z=x.iridescence>0,X=x.sheen>0,j=x.transmission>0,W=lt&&!!x.anisotropyMap,ct=I&&!!x.clearcoatMap,ut=I&&!!x.clearcoatNormalMap,wt=I&&!!x.clearcoatRoughnessMap,Bt=z&&!!x.iridescenceMap,rt=z&&!!x.iridescenceThicknessMap,pt=X&&!!x.sheenColorMap,Ct=X&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,ft=!!x.specularColorMap,qt=!!x.specularIntensityMap,V=j&&!!x.transmissionMap,xt=j&&!!x.thicknessMap,ot=!!x.gradientMap,Mt=!!x.alphaMap,it=x.alphaTest>0,tt=!!x.alphaHash,dt=!!x.extensions;let Gt=wn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const ae={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:yt,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:nt,batchingColor:nt&&C._colorsTexture!==null,instancing:at,instancingColor:at&&C.instanceColor!==null,instancingMorph:at&&C.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Cr,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:Kt,envMap:At,envMapMode:At&&F.mapping,envMapCubeUVHeight:k,aoMap:Rt,lightMap:Pt,bumpMap:St,normalMap:Ut,displacementMap:B,emissiveMap:Ht,normalMapObjectSpace:Ut&&x.normalMapType===Yd,normalMapTangentSpace:Ut&&x.normalMapType===Ru,metalnessMap:It,roughnessMap:Ot,anisotropy:lt,anisotropyMap:W,clearcoat:I,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:wt,dispersion:P,iridescence:z,iridescenceMap:Bt,iridescenceThicknessMap:rt,sheen:X,sheenColorMap:pt,sheenRoughnessMap:Ct,specularMap:Dt,specularColorMap:ft,specularIntensityMap:qt,transmission:j,transmissionMap:V,thicknessMap:xt,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Er&&x.alphaToCoverage===!1,alphaMap:Mt,alphaTest:it,alphaHash:tt,combine:x.combine,mapUv:Et&&E(x.map.channel),aoMapUv:Rt&&E(x.aoMap.channel),lightMapUv:Pt&&E(x.lightMap.channel),bumpMapUv:St&&E(x.bumpMap.channel),normalMapUv:Ut&&E(x.normalMap.channel),displacementMapUv:B&&E(x.displacementMap.channel),emissiveMapUv:Ht&&E(x.emissiveMap.channel),metalnessMapUv:It&&E(x.metalnessMap.channel),roughnessMapUv:Ot&&E(x.roughnessMap.channel),anisotropyMapUv:W&&E(x.anisotropyMap.channel),clearcoatMapUv:ct&&E(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&E(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&E(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&E(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&E(x.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&E(x.sheenRoughnessMap.channel),specularMapUv:Dt&&E(x.specularMap.channel),specularColorMapUv:ft&&E(x.specularColorMap.channel),specularIntensityMapUv:qt&&E(x.specularIntensityMap.channel),transmissionMapUv:V&&E(x.transmissionMap.channel),thicknessMapUv:xt&&E(x.thicknessMap.channel),alphaMapUv:Mt&&E(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ut||lt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Et||Mt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:et,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:st,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ne,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Fe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:dt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&x.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=d.has(1),ae.vertexUv2s=d.has(2),ae.vertexUv3s=d.has(3),d.clear(),ae}function _(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)y.push(A),y.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(b(y,x),f(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function f(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function c(x){const y=M[x.type];let A;if(y){const T=yn[y];A=bf.clone(T.uniforms)}else A=x.uniforms;return A}function S(x,y){let A=p.get(y);return A!==void 0?++A.usedTimes:(A=new s0(i,y,x,s),u.push(A),p.set(y,A)),A}function l(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),p.delete(x.cacheKey),x.destroy()}}function R(x){h.remove(x)}function w(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:c,acquireProgram:S,releaseProgram:l,releaseShaderCache:R,programs:u,dispose:w}}function h0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,h){i.get(o)[a]=h}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function u0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,g,m,M,E,v){let _=i[t];return _===void 0?(_={id:p.id,object:p,geometry:g,material:m,groupOrder:M,renderOrder:p.renderOrder,z:E,group:v},i[t]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=m,_.groupOrder=M,_.renderOrder=p.renderOrder,_.z=E,_.group=v),t++,_}function a(p,g,m,M,E,v){const _=o(p,g,m,M,E,v);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function h(p,g,m,M,E,v){const _=o(p,g,m,M,E,v);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function d(p,g){e.length>1&&e.sort(p||u0),n.length>1&&n.sort(g||ch),r.length>1&&r.sort(g||ch)}function u(){for(let p=t,g=i.length;p<g;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:h,finish:u,sort:d}}function d0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new hh,i.set(n,[o])):r>=s.length?(o=new hh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function f0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ie};break;case"SpotLight":e={position:new U,direction:new U,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function p0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let g0=0;function m0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _0(i){const t=new f0,e=p0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new U);const r=new U,s=new jt,o=new jt;function a(d){let u=0,p=0,g=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,M=0,E=0,v=0,_=0,b=0,f=0,c=0,S=0,l=0,R=0;d.sort(m0);for(let x=0,y=d.length;x<y;x++){const A=d[x],T=A.color,C=A.intensity,L=A.distance;let N=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===wr?N=A.shadow.map.texture:N=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=T.r*C,p+=T.g*C,g+=T.b*C;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],C);R++}else if(A.isDirectionalLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const F=A.shadow,k=e.get(A);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=A.shadow.matrix,b++}n.directional[m]=O,m++}else if(A.isSpotLight){const O=t.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(T).multiplyScalar(C),O.distance=L,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[E]=O;const F=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,F.updateMatrices(A),A.castShadow&&l++),n.spotLightMatrix[E]=F.matrix,A.castShadow){const k=e.get(A);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.spotShadow[E]=k,n.spotShadowMap[E]=N,c++}E++}else if(A.isRectAreaLight){const O=t.get(A);O.color.copy(T).multiplyScalar(C),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=O,v++}else if(A.isPointLight){const O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const F=A.shadow,k=e.get(A);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,n.pointShadow[M]=k,n.pointShadowMap[M]=N,n.pointShadowMatrix[M]=A.shadow.matrix,f++}n.point[M]=O,M++}else if(A.isHemisphereLight){const O=t.get(A);O.skyColor.copy(A.color).multiplyScalar(C),O.groundColor.copy(A.groundColor).multiplyScalar(C),n.hemi[_]=O,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=g;const w=n.hash;(w.directionalLength!==m||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==v||w.hemiLength!==_||w.numDirectionalShadows!==b||w.numPointShadows!==f||w.numSpotShadows!==c||w.numSpotMaps!==S||w.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=E,n.rectArea.length=v,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=c+S-l,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=l,n.numLightProbes=R,w.directionalLength=m,w.pointLength=M,w.spotLength=E,w.rectAreaLength=v,w.hemiLength=_,w.numDirectionalShadows=b,w.numPointShadows=f,w.numSpotShadows=c,w.numSpotMaps=S,w.numLightProbes=R,n.version=g0++)}function h(d,u){let p=0,g=0,m=0,M=0,E=0;const v=u.matrixWorldInverse;for(let _=0,b=d.length;_<b;_++){const f=d[_];if(f.isDirectionalLight){const c=n.directional[p];c.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(v),p++}else if(f.isSpotLight){const c=n.spot[m];c.position.setFromMatrixPosition(f.matrixWorld),c.position.applyMatrix4(v),c.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(v),m++}else if(f.isRectAreaLight){const c=n.rectArea[M];c.position.setFromMatrixPosition(f.matrixWorld),c.position.applyMatrix4(v),o.identity(),s.copy(f.matrixWorld),s.premultiply(v),o.extractRotation(s),c.halfWidth.set(f.width*.5,0,0),c.halfHeight.set(0,f.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),M++}else if(f.isPointLight){const c=n.point[g];c.position.setFromMatrixPosition(f.matrixWorld),c.position.applyMatrix4(v),g++}else if(f.isHemisphereLight){const c=n.hemi[E];c.direction.setFromMatrixPosition(f.matrixWorld),c.direction.transformDirection(v),E++}}}return{setup:a,setupView:h,state:n}}function uh(i){const t=new _0(i),e=[],n=[];function r(u){d.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function x0(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new uh(i),t.set(r,[a])):s>=o.length?(a=new uh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],M0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],dh=new jt,Br=new U,ha=new U;function E0(i,t,e){let n=new Hu;const r=new zt,s=new zt,o=new ce,a=new Ff,h=new Of,d={},u=e.maxTextureSize,p={[Pn]:Fe,[Fe]:Pn,[_n]:_n},g=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:v0,fragmentShader:S0}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new Qn;M.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new qe(M,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let _=this.type;this.render=function(l,R,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||l.length===0)return;l.type===Ad&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),l.type=no);const x=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),T=i.state;T.setBlending($n),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const C=_!==this.type;C&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(N=>N.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,N=l.length;L<N;L++){const O=l[L],F=O.shadow;if(F===void 0){kt("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const k=F.getFrameExtents();if(r.multiply(k),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,F.mapSize.y=s.y)),F.map===null||C===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qr){if(O.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Cn(r.x,r.y,{format:wr,type:Kn,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new ts(r.x,r.y,En),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=Zn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=we,F.map.depthTexture.magFilter=we}else{O.isPointLight?(F.map=new Vu(r.x),F.map.depthTexture=new Uf(r.x,Dn)):(F.map=new Cn(r.x,r.y),F.map.depthTexture=new ts(r.x,r.y,Dn)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=Zn;const Q=i.state.buffers.depth.getReversed();this.type===no?(F.map.depthTexture.compareFunction=Q?Kl:Yl,F.map.depthTexture.minFilter=Pe,F.map.depthTexture.magFilter=Pe):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=we,F.map.depthTexture.magFilter=we)}F.camera.updateProjectionMatrix()}const Z=F.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<Z;Q++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(F.map),i.clear());const J=F.getViewport(Q);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),T.viewport(o)}if(O.isPointLight){const J=F.camera,st=F.matrix,ht=O.distance||J.far;ht!==J.far&&(J.far=ht,J.updateProjectionMatrix()),Br.setFromMatrixPosition(O.matrixWorld),J.position.copy(Br),ha.copy(J.position),ha.add(y0[Q]),J.up.copy(M0[Q]),J.lookAt(ha),J.updateMatrixWorld(),st.makeTranslation(-Br.x,-Br.y,-Br.z),dh.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(dh,J.coordinateSystem,J.reversedDepth)}else F.updateMatrices(O);n=F.getFrustum(),c(R,w,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===qr&&b(F,w),F.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(x,y,A)};function b(l,R){const w=t.update(E);g.defines.VSM_SAMPLES!==l.blurSamples&&(g.defines.VSM_SAMPLES=l.blurSamples,m.defines.VSM_SAMPLES=l.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),l.mapPass===null&&(l.mapPass=new Cn(r.x,r.y,{format:wr,type:Kn})),g.uniforms.shadow_pass.value=l.map.depthTexture,g.uniforms.resolution.value=l.mapSize,g.uniforms.radius.value=l.radius,i.setRenderTarget(l.mapPass),i.clear(),i.renderBufferDirect(R,null,w,g,E,null),m.uniforms.shadow_pass.value=l.mapPass.texture,m.uniforms.resolution.value=l.mapSize,m.uniforms.radius.value=l.radius,i.setRenderTarget(l.map),i.clear(),i.renderBufferDirect(R,null,w,m,E,null)}function f(l,R,w,x){let y=null;const A=w.isPointLight===!0?l.customDistanceMaterial:l.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?h:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const T=y.uuid,C=R.uuid;let L=d[T];L===void 0&&(L={},d[T]=L);let N=L[C];N===void 0&&(N=y.clone(),L[C]=N,R.addEventListener("dispose",S)),y=N}if(y.visible=R.visible,y.wireframe=R.wireframe,x===qr?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:p[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const T=i.properties.get(y);T.light=w}return y}function c(l,R,w,x,y){if(l.visible===!1)return;if(l.layers.test(R.layers)&&(l.isMesh||l.isLine||l.isPoints)&&(l.castShadow||l.receiveShadow&&y===qr)&&(!l.frustumCulled||n.intersectsObject(l))){l.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,l.matrixWorld);const C=t.update(l),L=l.material;if(Array.isArray(L)){const N=C.groups;for(let O=0,F=N.length;O<F;O++){const k=N[O],Z=L[k.materialIndex];if(Z&&Z.visible){const Q=f(l,Z,x,y);l.onBeforeShadow(i,l,R,w,C,Q,k),i.renderBufferDirect(w,null,C,Q,l,k),l.onAfterShadow(i,l,R,w,C,Q,k)}}}else if(L.visible){const N=f(l,L,x,y);l.onBeforeShadow(i,l,R,w,C,N,null),i.renderBufferDirect(w,null,C,N,l,null),l.onAfterShadow(i,l,R,w,C,N,null)}}const T=l.children;for(let C=0,L=T.length;C<L;C++)c(T[C],R,w,x,y)}function S(l){l.target.removeEventListener("dispose",S);for(const w in d){const x=d[w],y=l.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const b0={[za]:Va,[Ha]:Wa,[ka]:Xa,[Ar]:Ga,[Va]:za,[Wa]:Ha,[Xa]:ka,[Ga]:Ar};function A0(i,t){function e(){let V=!1;const xt=new ce;let ot=null;const Mt=new ce(0,0,0,0);return{setMask:function(it){ot!==it&&!V&&(i.colorMask(it,it,it,it),ot=it)},setLocked:function(it){V=it},setClear:function(it,tt,dt,Gt,ae){ae===!0&&(it*=Gt,tt*=Gt,dt*=Gt),xt.set(it,tt,dt,Gt),Mt.equals(xt)===!1&&(i.clearColor(it,tt,dt,Gt),Mt.copy(xt))},reset:function(){V=!1,ot=null,Mt.set(-1,0,0,0)}}}function n(){let V=!1,xt=!1,ot=null,Mt=null,it=null;return{setReversed:function(tt){if(xt!==tt){const dt=t.get("EXT_clip_control");tt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),xt=tt;const Gt=it;it=null,this.setClear(Gt)}},getReversed:function(){return xt},setTest:function(tt){tt?K(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(tt){ot!==tt&&!V&&(i.depthMask(tt),ot=tt)},setFunc:function(tt){if(xt&&(tt=b0[tt]),Mt!==tt){switch(tt){case za:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=tt}},setLocked:function(tt){V=tt},setClear:function(tt){it!==tt&&(xt&&(tt=1-tt),i.clearDepth(tt),it=tt)},reset:function(){V=!1,ot=null,Mt=null,it=null,xt=!1}}}function r(){let V=!1,xt=null,ot=null,Mt=null,it=null,tt=null,dt=null,Gt=null,ae=null;return{setTest:function(te){V||(te?K(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(te){xt!==te&&!V&&(i.stencilMask(te),xt=te)},setFunc:function(te,vn,Ln){(ot!==te||Mt!==vn||it!==Ln)&&(i.stencilFunc(te,vn,Ln),ot=te,Mt=vn,it=Ln)},setOp:function(te,vn,Ln){(tt!==te||dt!==vn||Gt!==Ln)&&(i.stencilOp(te,vn,Ln),tt=te,dt=vn,Gt=Ln)},setLocked:function(te){V=te},setClear:function(te){ae!==te&&(i.clearStencil(te),ae=te)},reset:function(){V=!1,xt=null,ot=null,Mt=null,it=null,tt=null,dt=null,Gt=null,ae=null}}}const s=new e,o=new n,a=new r,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,m=[],M=null,E=!1,v=null,_=null,b=null,f=null,c=null,S=null,l=null,R=new ie(0,0,0),w=0,x=!1,y=null,A=null,T=null,C=null,L=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=F>=2);let Z=null,Q={};const J=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),ht=new ce().fromArray(J),yt=new ce().fromArray(st);function vt(V,xt,ot,Mt){const it=new Uint8Array(4),tt=i.createTexture();i.bindTexture(V,tt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<ot;dt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(xt+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return tt}const q={};q[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Ar),St(!1),Ut(mc),K(i.CULL_FACE),Rt($n);function K(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function et(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function at(V,xt){return p[V]!==xt?(i.bindFramebuffer(V,xt),p[V]=xt,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=xt),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function nt(V,xt){let ot=m,Mt=!1;if(V){ot=g.get(xt),ot===void 0&&(ot=[],g.set(xt,ot));const it=V.textures;if(ot.length!==it.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,dt=it.length;tt<dt;tt++)ot[tt]=i.COLOR_ATTACHMENT0+tt;ot.length=it.length,Mt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ot)}function Et(V){return M!==V?(i.useProgram(V),M=V,!0):!1}const Kt={[Ii]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Kt[Rd]=i.MIN,Kt[Pd]=i.MAX;const At={[Dd]:i.ZERO,[Id]:i.ONE,[Ld]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(V,xt,ot,Mt,it,tt,dt,Gt,ae,te){if(V===$n){E===!0&&(et(i.BLEND),E=!1);return}if(E===!1&&(K(i.BLEND),E=!0),V!==Td){if(V!==v||te!==x){if((_!==Ii||c!==Ii)&&(i.blendEquation(i.FUNC_ADD),_=Ii,c=Ii),te)switch(V){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",V);break}else switch(V){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",V);break}b=null,f=null,S=null,l=null,R.set(0,0,0),w=0,v=V,x=te}return}it=it||xt,tt=tt||ot,dt=dt||Mt,(xt!==_||it!==c)&&(i.blendEquationSeparate(Kt[xt],Kt[it]),_=xt,c=it),(ot!==b||Mt!==f||tt!==S||dt!==l)&&(i.blendFuncSeparate(At[ot],At[Mt],At[tt],At[dt]),b=ot,f=Mt,S=tt,l=dt),(Gt.equals(R)===!1||ae!==w)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ae),R.copy(Gt),w=ae),v=V,x=!1}function Pt(V,xt){V.side===_n?et(i.CULL_FACE):K(i.CULL_FACE);let ot=V.side===Fe;xt&&(ot=!ot),St(ot),V.blending===Er&&V.transparent===!1?Rt($n):Rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Mt=V.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(V){y!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),y=V)}function Ut(V){V!==Ed?(K(i.CULL_FACE),V!==A&&(V===mc?i.cullFace(i.BACK):V===bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),A=V}function B(V){V!==T&&(O&&i.lineWidth(V),T=V)}function Ht(V,xt,ot){V?(K(i.POLYGON_OFFSET_FILL),(C!==xt||L!==ot)&&(i.polygonOffset(xt,ot),C=xt,L=ot)):et(i.POLYGON_OFFSET_FILL)}function It(V){V?K(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function Ot(V){V===void 0&&(V=i.TEXTURE0+N-1),Z!==V&&(i.activeTexture(V),Z=V)}function lt(V,xt,ot){ot===void 0&&(Z===null?ot=i.TEXTURE0+N-1:ot=Z);let Mt=Q[ot];Mt===void 0&&(Mt={type:void 0,texture:void 0},Q[ot]=Mt),(Mt.type!==V||Mt.texture!==xt)&&(Z!==ot&&(i.activeTexture(ot),Z=ot),i.bindTexture(V,xt||q[V]),Mt.type=V,Mt.texture=xt)}function I(){const V=Q[Z];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function X(){try{i.texSubImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function j(){try{i.texSubImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function ut(){try{i.texStorage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function wt(){try{i.texStorage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function Bt(){try{i.texImage2D(...arguments)}catch(V){Qt("WebGLState:",V)}}function rt(){try{i.texImage3D(...arguments)}catch(V){Qt("WebGLState:",V)}}function pt(V){ht.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function Ct(V){yt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),yt.copy(V))}function Dt(V,xt){let ot=d.get(xt);ot===void 0&&(ot=new WeakMap,d.set(xt,ot));let Mt=ot.get(V);Mt===void 0&&(Mt=i.getUniformBlockIndex(xt,V.name),ot.set(V,Mt))}function ft(V,xt){const Mt=d.get(xt).get(V);h.get(xt)!==Mt&&(i.uniformBlockBinding(xt,Mt,V.__bindingPointIndex),h.set(xt,Mt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,Q={},p={},g=new WeakMap,m=[],M=null,E=!1,v=null,_=null,b=null,f=null,c=null,S=null,l=null,R=new ie(0,0,0),w=0,x=!1,y=null,A=null,T=null,C=null,L=null,ht.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:et,bindFramebuffer:at,drawBuffers:nt,useProgram:Et,setBlending:Rt,setMaterial:Pt,setFlipSided:St,setCullFace:Ut,setLineWidth:B,setPolygonOffset:Ht,setScissorTest:It,activeTexture:Ot,bindTexture:lt,unbindTexture:I,compressedTexImage2D:P,compressedTexImage3D:z,texImage2D:Bt,texImage3D:rt,updateUBOMapping:Dt,uniformBlockBinding:ft,texStorage2D:ut,texStorage3D:wt,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:ct,scissor:pt,viewport:Ct,reset:qt}}function T0(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new zt,u=new WeakMap;let p;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,P){return m?new OffscreenCanvas(I,P):_o("canvas")}function E(I,P,z){let X=1;const j=lt(I);if((j.width>z||j.height>z)&&(X=z/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const W=Math.floor(X*j.width),ct=Math.floor(X*j.height);p===void 0&&(p=M(W,ct));const ut=P?M(W,ct):p;return ut.width=W,ut.height=ct,ut.getContext("2d").drawImage(I,0,0,W,ct),kt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+ct+")."),ut}else return"data"in I&&kt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function v(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function f(I,P,z,X,j=!1){if(I!==null){if(i[I]!==void 0)return i[I];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let W=P;if(P===i.RED&&(z===i.FLOAT&&(W=i.R32F),z===i.HALF_FLOAT&&(W=i.R16F),z===i.UNSIGNED_BYTE&&(W=i.R8)),P===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.R8UI),z===i.UNSIGNED_SHORT&&(W=i.R16UI),z===i.UNSIGNED_INT&&(W=i.R32UI),z===i.BYTE&&(W=i.R8I),z===i.SHORT&&(W=i.R16I),z===i.INT&&(W=i.R32I)),P===i.RG&&(z===i.FLOAT&&(W=i.RG32F),z===i.HALF_FLOAT&&(W=i.RG16F),z===i.UNSIGNED_BYTE&&(W=i.RG8)),P===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RG8UI),z===i.UNSIGNED_SHORT&&(W=i.RG16UI),z===i.UNSIGNED_INT&&(W=i.RG32UI),z===i.BYTE&&(W=i.RG8I),z===i.SHORT&&(W=i.RG16I),z===i.INT&&(W=i.RG32I)),P===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RGB8UI),z===i.UNSIGNED_SHORT&&(W=i.RGB16UI),z===i.UNSIGNED_INT&&(W=i.RGB32UI),z===i.BYTE&&(W=i.RGB8I),z===i.SHORT&&(W=i.RGB16I),z===i.INT&&(W=i.RGB32I)),P===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),z===i.UNSIGNED_INT&&(W=i.RGBA32UI),z===i.BYTE&&(W=i.RGBA8I),z===i.SHORT&&(W=i.RGBA16I),z===i.INT&&(W=i.RGBA32I)),P===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),P===i.RGBA){const ct=j?go:Zt.getTransfer(X);z===i.FLOAT&&(W=i.RGBA32F),z===i.HALF_FLOAT&&(W=i.RGBA16F),z===i.UNSIGNED_BYTE&&(W=ct===ne?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function c(I,P){let z;return I?P===null||P===Dn||P===Jr?z=i.DEPTH24_STENCIL8:P===En?z=i.DEPTH32F_STENCIL8:P===jr&&(z=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Dn||P===Jr?z=i.DEPTH_COMPONENT24:P===En?z=i.DEPTH_COMPONENT32F:P===jr&&(z=i.DEPTH_COMPONENT16),z}function S(I,P){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==we&&I.minFilter!==Pe?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function l(I){const P=I.target;P.removeEventListener("dispose",l),w(P),P.isVideoTexture&&u.delete(P)}function R(I){const P=I.target;P.removeEventListener("dispose",R),y(P)}function w(I){const P=n.get(I);if(P.__webglInit===void 0)return;const z=I.source,X=g.get(z);if(X){const j=X[P.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(I),Object.keys(X).length===0&&g.delete(z)}n.remove(I)}function x(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const z=I.source,X=g.get(z);delete X[P.__cacheKey],o.memory.textures--}function y(I){const P=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(P.__webglFramebuffer[X]))for(let j=0;j<P.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(P.__webglFramebuffer[X][j]);else i.deleteFramebuffer(P.__webglFramebuffer[X]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[X])}else{if(Array.isArray(P.__webglFramebuffer))for(let X=0;X<P.__webglFramebuffer.length;X++)i.deleteFramebuffer(P.__webglFramebuffer[X]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let X=0;X<P.__webglColorRenderbuffer.length;X++)P.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[X]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const z=I.textures;for(let X=0,j=z.length;X<j;X++){const W=n.get(z[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(I)}let A=0;function T(){A=0}function C(){const I=A;return I>=r.maxTextures&&kt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function L(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function N(I,P){const z=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const X=I.image;if(X===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,I,P);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+P)}function O(I,P){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){q(z,I,P);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+P)}function F(I,P){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){q(z,I,P);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+P)}function k(I,P){const z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){K(z,I,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+P)}const Z={[Ya]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},Q={[we]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},J={[Kd]:i.NEVER,[tf]:i.ALWAYS,[Zd]:i.LESS,[Yl]:i.LEQUAL,[jd]:i.EQUAL,[Kl]:i.GEQUAL,[Jd]:i.GREATER,[Qd]:i.NOTEQUAL};function st(I,P){if(P.type===En&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Pe||P.magFilter===Uo||P.magFilter===us||P.magFilter===Ui||P.minFilter===Pe||P.minFilter===Uo||P.minFilter===us||P.minFilter===Ui)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Z[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Z[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Z[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Q[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Q[P.minFilter]),P.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,J[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===we||P.minFilter!==us&&P.minFilter!==Ui||P.type===En&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ht(I,P){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",l));const X=P.source;let j=g.get(X);j===void 0&&(j={},g.set(X,j));const W=L(P);if(W!==I.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[W].usedTimes++;const ct=j[I.__cacheKey];ct!==void 0&&(j[I.__cacheKey].usedTimes--,ct.usedTimes===0&&x(P)),I.__cacheKey=W,I.__webglTexture=j[W].texture}return z}function yt(I,P,z){return Math.floor(Math.floor(I/z)/P)}function vt(I,P,z,X){const W=I.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,z,X,P.data);else{W.sort((rt,pt)=>rt.start-pt.start);let ct=0;for(let rt=1;rt<W.length;rt++){const pt=W[ct],Ct=W[rt],Dt=pt.start+pt.count,ft=yt(Ct.start,P.width,4),qt=yt(pt.start,P.width,4);Ct.start<=Dt+1&&ft===qt&&yt(Ct.start+Ct.count-1,P.width,4)===ft?pt.count=Math.max(pt.count,Ct.start+Ct.count-pt.start):(++ct,W[ct]=Ct)}W.length=ct+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let rt=0,pt=W.length;rt<pt;rt++){const Ct=W[rt],Dt=Math.floor(Ct.start/4),ft=Math.ceil(Ct.count/4),qt=Dt%P.width,V=Math.floor(Dt/P.width),xt=ft,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,qt,V,xt,ot,z,X,P.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function q(I,P,z){let X=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(X=i.TEXTURE_3D);const j=ht(I,P),W=P.source;e.bindTexture(X,I.__webglTexture,i.TEXTURE0+z);const ct=n.get(W);if(W.version!==ct.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const ut=Zt.getPrimaries(Zt.workingColorSpace),wt=P.colorSpace===ui?null:Zt.getPrimaries(P.colorSpace),Bt=P.colorSpace===ui||ut===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let rt=E(P.image,!1,r.maxTextureSize);rt=Ot(P,rt);const pt=s.convert(P.format,P.colorSpace),Ct=s.convert(P.type);let Dt=f(P.internalFormat,pt,Ct,P.colorSpace,P.isVideoTexture);st(X,P);let ft;const qt=P.mipmaps,V=P.isVideoTexture!==!0,xt=ct.__version===void 0||j===!0,ot=W.dataReady,Mt=S(P,rt);if(P.isDepthTexture)Dt=c(P.format===Ni,P.type),xt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,pt,Ct,null));else if(P.isDataTexture)if(qt.length>0){V&&xt&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,qt[0].width,qt[0].height);for(let it=0,tt=qt.length;it<tt;it++)ft=qt[it],V?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,it,Dt,ft.width,ft.height,0,pt,Ct,ft.data);P.generateMipmaps=!1}else V?(xt&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,rt.width,rt.height),ot&&vt(P,rt,pt,Ct)):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,pt,Ct,rt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,qt[0].width,qt[0].height,rt.depth);for(let it=0,tt=qt.length;it<tt;it++)if(ft=qt[it],P.format!==xn)if(pt!==null)if(V){if(ot)if(P.layerUpdates.size>0){const dt=Gc(ft.width,ft.height,P.format,P.type);for(const Gt of P.layerUpdates){const ae=ft.data.subarray(Gt*dt/ft.data.BYTES_PER_ELEMENT,(Gt+1)*dt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Gt,ft.width,ft.height,1,pt,ae)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,rt.depth,pt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Dt,ft.width,ft.height,rt.depth,0,ft.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,rt.depth,pt,Ct,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Dt,ft.width,ft.height,rt.depth,0,pt,Ct,ft.data)}else{V&&xt&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,qt[0].width,qt[0].height);for(let it=0,tt=qt.length;it<tt;it++)ft=qt[it],P.format!==xn?pt!==null?V?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Dt,ft.width,ft.height,0,ft.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,it,Dt,ft.width,ft.height,0,pt,Ct,ft.data)}else if(P.isDataArrayTexture)if(V){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,rt.width,rt.height,rt.depth),ot)if(P.layerUpdates.size>0){const it=Gc(rt.width,rt.height,P.format,P.type);for(const tt of P.layerUpdates){const dt=rt.data.subarray(tt*it/rt.data.BYTES_PER_ELEMENT,(tt+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,pt,Ct,dt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,pt,Ct,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,pt,Ct,rt.data);else if(P.isData3DTexture)V?(xt&&e.texStorage3D(i.TEXTURE_3D,Mt,Dt,rt.width,rt.height,rt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,pt,Ct,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,pt,Ct,rt.data);else if(P.isFramebufferTexture){if(xt)if(V)e.texStorage2D(i.TEXTURE_2D,Mt,Dt,rt.width,rt.height);else{let it=rt.width,tt=rt.height;for(let dt=0;dt<Mt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Dt,it,tt,0,pt,Ct,null),it>>=1,tt>>=1}}else if(qt.length>0){if(V&&xt){const it=lt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Dt,it.width,it.height)}for(let it=0,tt=qt.length;it<tt;it++)ft=qt[it],V?ot&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt,Ct,ft):e.texImage2D(i.TEXTURE_2D,it,Dt,pt,Ct,ft);P.generateMipmaps=!1}else if(V){if(xt){const it=lt(rt);e.texStorage2D(i.TEXTURE_2D,Mt,Dt,it.width,it.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,rt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,pt,Ct,rt);v(P)&&_(X),ct.__version=W.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function K(I,P,z){if(P.image.length!==6)return;const X=ht(I,P),j=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);const W=n.get(j);if(j.version!==W.__version||X===!0){e.activeTexture(i.TEXTURE0+z);const ct=Zt.getPrimaries(Zt.workingColorSpace),ut=P.colorSpace===ui?null:Zt.getPrimaries(P.colorSpace),wt=P.colorSpace===ui||ct===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Bt=P.isCompressedTexture||P.image[0].isCompressedTexture,rt=P.image[0]&&P.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++)!Bt&&!rt?pt[tt]=E(P.image[tt],!0,r.maxCubemapSize):pt[tt]=rt?P.image[tt].image:P.image[tt],pt[tt]=Ot(P,pt[tt]);const Ct=pt[0],Dt=s.convert(P.format,P.colorSpace),ft=s.convert(P.type),qt=f(P.internalFormat,Dt,ft,P.colorSpace),V=P.isVideoTexture!==!0,xt=W.__version===void 0||X===!0,ot=j.dataReady;let Mt=S(P,Ct);st(i.TEXTURE_CUBE_MAP,P);let it;if(Bt){V&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,qt,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){it=pt[tt].mipmaps;for(let dt=0;dt<it.length;dt++){const Gt=it[dt];P.format!==xn?Dt!==null?V?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,Gt.width,Gt.height,Dt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,qt,Gt.width,Gt.height,0,Gt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,Gt.width,Gt.height,Dt,ft,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,qt,Gt.width,Gt.height,0,Dt,ft,Gt.data)}}}else{if(it=P.mipmaps,V&&xt){it.length>0&&Mt++;const tt=lt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,Dt,ft,pt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,pt[tt].width,pt[tt].height,0,Dt,ft,pt[tt].data);for(let dt=0;dt<it.length;dt++){const ae=it[dt].image[tt].image;V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,ae.width,ae.height,Dt,ft,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,qt,ae.width,ae.height,0,Dt,ft,ae.data)}}else{V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,ft,pt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Dt,ft,pt[tt]);for(let dt=0;dt<it.length;dt++){const Gt=it[dt];V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Dt,ft,Gt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,qt,Dt,ft,Gt.image[tt])}}}v(P)&&_(i.TEXTURE_CUBE_MAP),W.__version=j.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function et(I,P,z,X,j,W){const ct=s.convert(z.format,z.colorSpace),ut=s.convert(z.type),wt=f(z.internalFormat,ct,ut,z.colorSpace),Bt=n.get(P),rt=n.get(z);if(rt.__renderTarget=P,!Bt.__hasExternalTextures){const pt=Math.max(1,P.width>>W),Ct=Math.max(1,P.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,wt,pt,Ct,P.depth,0,ct,ut,null):e.texImage2D(j,W,wt,pt,Ct,0,ct,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,rt.__webglTexture,0,B(P)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,rt.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(I,P,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer){const X=P.depthTexture,j=X&&X.isDepthTexture?X.type:null,W=c(P.stencilBuffer,j),ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ht(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(P),W,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(P),W,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,W,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,I)}else{const X=P.textures;for(let j=0;j<X.length;j++){const W=X[j],ct=s.convert(W.format,W.colorSpace),ut=s.convert(W.type),wt=f(W.internalFormat,ct,ut,W.colorSpace);Ht(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(P),wt,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(P),wt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,wt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(I,P,z){const X=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(P.depthTexture);if(j.__renderTarget=P,(!j.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,P.depthTexture.addEventListener("dispose",l)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),st(i.TEXTURE_CUBE_MAP,P.depthTexture);const Bt=s.convert(P.depthTexture.format),rt=s.convert(P.depthTexture.type);let pt;P.depthTexture.format===Zn?pt=i.DEPTH_COMPONENT24:P.depthTexture.format===Ni&&(pt=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pt,P.width,P.height,0,Bt,rt,null)}}else N(P.depthTexture,0);const W=j.__webglTexture,ct=B(P),ut=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,wt=P.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===Zn)Ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,ut,W,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,wt,ut,W,0);else if(P.depthTexture.format===Ni)Ht(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,ut,W,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,wt,ut,W,0);else throw new Error("Unknown depthTexture format")}function Et(I){const P=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){const X=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),X){const j=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),P.__depthDisposeCallback=j}P.__boundDepthTexture=X}if(I.depthTexture&&!P.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)nt(P.__webglFramebuffer[X],I,X);else{const X=I.texture.mipmaps;X&&X.length>0?nt(P.__webglFramebuffer[0],I,0):nt(P.__webglFramebuffer,I,0)}else if(z){P.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[X]),P.__webglDepthbuffer[X]===void 0)P.__webglDepthbuffer[X]=i.createRenderbuffer(),at(P.__webglDepthbuffer[X],I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=P.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const X=I.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),at(P.__webglDepthbuffer,I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(I,P,z){const X=n.get(I);P!==void 0&&et(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Et(I)}function At(I){const P=I.texture,z=n.get(I),X=n.get(P);I.addEventListener("dispose",R);const j=I.textures,W=I.isWebGLCubeRenderTarget===!0,ct=j.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=P.version,o.memory.textures++),W){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let wt=0;wt<P.mipmaps.length;wt++)z.__webglFramebuffer[ut][wt]=i.createFramebuffer()}else z.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<P.mipmaps.length;ut++)z.__webglFramebuffer[ut]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ct)for(let ut=0,wt=j.length;ut<wt;ut++){const Bt=n.get(j[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ht(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){const wt=j[ut];z.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Bt=s.convert(wt.format,wt.colorSpace),rt=s.convert(wt.type),pt=f(wt.internalFormat,Bt,rt,wt.colorSpace,I.isXRRenderTarget===!0),Ct=B(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),at(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),st(i.TEXTURE_CUBE_MAP,P);for(let ut=0;ut<6;ut++)if(P.mipmaps&&P.mipmaps.length>0)for(let wt=0;wt<P.mipmaps.length;wt++)et(z.__webglFramebuffer[ut][wt],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt);else et(z.__webglFramebuffer[ut],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ut=0,wt=j.length;ut<wt;ut++){const Bt=j[ut],rt=n.get(Bt);let pt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,rt.__webglTexture),st(pt,Bt),et(z.__webglFramebuffer,I,Bt,i.COLOR_ATTACHMENT0+ut,pt,0),v(Bt)&&_(pt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,X.__webglTexture),st(ut,P),P.mipmaps&&P.mipmaps.length>0)for(let wt=0;wt<P.mipmaps.length;wt++)et(z.__webglFramebuffer[wt],I,P,i.COLOR_ATTACHMENT0,ut,wt);else et(z.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,ut,0);v(P)&&_(ut),e.unbindTexture()}I.depthBuffer&&Et(I)}function Rt(I){const P=I.textures;for(let z=0,X=P.length;z<X;z++){const j=P[z];if(v(j)){const W=b(I),ct=n.get(j).__webglTexture;e.bindTexture(W,ct),_(W),e.unbindTexture()}}}const Pt=[],St=[];function Ut(I){if(I.samples>0){if(Ht(I)===!1){const P=I.textures,z=I.width,X=I.height;let j=i.COLOR_BUFFER_BIT;const W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(I),ut=P.length>1;if(ut)for(let Bt=0;Bt<P.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const wt=I.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Bt=0;Bt<P.length;Bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Bt]);const rt=n.get(P[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,j,i.NEAREST),h===!0&&(Pt.length=0,St.length=0,Pt.push(i.COLOR_ATTACHMENT0+Bt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Pt.push(W),St.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Bt=0;Bt<P.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Bt]);const rt=n.get(P[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function B(I){return Math.min(r.maxSamples,I.samples)}function Ht(I){const P=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function It(I){const P=o.render.frame;u.get(I)!==P&&(u.set(I,P),I.update())}function Ot(I,P){const z=I.colorSpace,X=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Cr&&z!==ui&&(Zt.getTransfer(z)===ne?(X!==xn||j!==cn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",z)),P}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=C,this.resetTextureUnits=T,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=k,this.rebindTextures=Kt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function w0(i,t){function e(n,r=ui){let s;const o=Zt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mu)return i.BYTE;if(n===Eu)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===wu)return i.RGB;if(n===xn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Cu)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===wr)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===io||n===ro||n===so||n===oo)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===ja||n===Ja||n===Qa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tl||n===el)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===il)return s.COMPRESSED_R11_EAC;if(n===rl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===sl)return s.COMPRESSED_RG11_EAC;if(n===ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===gl||n===ml||n===_l||n===xl||n===vl||n===Sl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===al)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yl||n===Ml||n===El)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===yl)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Al||n===Tl||n===wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ku(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:C0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D0 extends ki{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",h=1,d=null,u=null,p=null,g=null,m=null,M=null;const E=typeof XRWebGLBinding<"u",v=new P0,_={},b=e.getContextAttributes();let f=null,c=null;const S=[],l=[],R=new zt;let w=null;const x=new an;x.viewport=new ce;const y=new an;y.viewport=new ce;const A=[x,y],T=new Bf;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=S[q];return K===void 0&&(K=new na,S[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=S[q];return K===void 0&&(K=new na,S[q]=K),K.getGripSpace()},this.getHand=function(q){let K=S[q];return K===void 0&&(K=new na,S[q]=K),K.getHandSpace()};function N(q){const K=l.indexOf(q.inputSource);if(K===-1)return;const et=S[K];et!==void 0&&(et.update(q.inputSource,q.frame,d||o),et.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",F);for(let q=0;q<S.length;q++){const K=l[q];K!==null&&(l[q]=null,S[q].disconnect(K))}C=null,L=null,v.reset();for(const q in _)delete _[q];t.setRenderTarget(f),m=null,g=null,p=null,r=null,c=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,at=null,nt=null;b.depth&&(nt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=b.stencil?Ni:Zn,at=b.stencil?Jr:Dn);const Et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(Et),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),c=new Cn(g.textureWidth,g.textureHeight,{format:xn,type:cn,depthTexture:new ts(g.textureWidth,g.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Cn(m.framebufferWidth,m.framebufferHeight,{format:xn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(h),d=null,o=await r.requestReferenceSpace(a),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(q){for(let K=0;K<q.removed.length;K++){const et=q.removed[K],at=l.indexOf(et);at>=0&&(l[at]=null,S[at].disconnect(et))}for(let K=0;K<q.added.length;K++){const et=q.added[K];let at=l.indexOf(et);if(at===-1){for(let Et=0;Et<S.length;Et++)if(Et>=l.length){l.push(et),at=Et;break}else if(l[Et]===null){l[Et]=et,at=Et;break}if(at===-1)break}const nt=S[at];nt&&nt.connect(et)}}const k=new U,Z=new U;function Q(q,K,et){k.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(et.matrixWorld);const at=k.distanceTo(Z),nt=K.projectionMatrix.elements,Et=et.projectionMatrix.elements,Kt=nt[14]/(nt[10]-1),At=nt[14]/(nt[10]+1),Rt=(nt[9]+1)/nt[5],Pt=(nt[9]-1)/nt[5],St=(nt[8]-1)/nt[0],Ut=(Et[8]+1)/Et[0],B=Kt*St,Ht=Kt*Ut,It=at/(-St+Ut),Ot=It*-St;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(It),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),nt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const lt=Kt+It,I=At+It,P=B-Ot,z=Ht+(at-Ot),X=Rt*At/I*lt,j=Pt*At/I*lt;q.projectionMatrix.makePerspective(P,z,X,j,lt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let K=q.near,et=q.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(et=v.depthFar)),T.near=y.near=x.near=K,T.far=y.far=x.far=et,(C!==T.near||L!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,L=T.far),T.layers.mask=q.layers.mask|6,x.layers.mask=T.layers.mask&3,y.layers.mask=T.layers.mask&5;const at=q.parent,nt=T.cameras;J(T,at);for(let Et=0;Et<nt.length;Et++)J(nt[Et],at);nt.length===2?Q(T,x,y):T.projectionMatrix.copy(x.projectionMatrix),st(q,T,at)};function st(q,K,et){et===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(et.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&m===null))return h},this.setFoveation=function(q){h=q,g!==null&&(g.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)},this.getCameraTexture=function(q){return _[q]};let ht=null;function yt(q,K){if(u=K.getViewerPose(d||o),M=K,u!==null){const et=u.views;m!==null&&(t.setRenderTargetFramebuffer(c,m.framebuffer),t.setRenderTarget(c));let at=!1;et.length!==T.cameras.length&&(T.cameras.length=0,at=!0);for(let At=0;At<et.length;At++){const Rt=et[At];let Pt=null;if(m!==null)Pt=m.getViewport(Rt);else{const Ut=p.getViewSubImage(g,Rt);Pt=Ut.viewport,At===0&&(t.setRenderTargetTextures(c,Ut.colorTexture,Ut.depthStencilTexture),t.setRenderTarget(c))}let St=A[At];St===void 0&&(St=new an,St.layers.enable(At),St.viewport=new ce,A[At]=St),St.matrix.fromArray(Rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),At===0&&(T.matrix.copy(St.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),at===!0&&T.cameras.push(St)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const At=p.getDepthInformation(et[0]);At&&At.isValid&&At.texture&&v.init(At,r.renderState)}if(nt&&nt.includes("camera-access")&&E){t.state.unbindTexture(),p=n.getBinding();for(let At=0;At<et.length;At++){const Rt=et[At].camera;if(Rt){let Pt=_[Rt];Pt||(Pt=new ku,_[Rt]=Pt);const St=p.getCameraImage(Rt);Pt.sourceTexture=St}}}}for(let et=0;et<S.length;et++){const at=l[et],nt=S[et];at!==null&&nt!==void 0&&nt.update(at,K,d||o)}ht&&ht(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),M=null}const vt=new Xu;vt.setAnimationLoop(yt),this.setAnimationLoop=function(q){ht=q},this.dispose=function(){}}}const Ai=new jn,I0=new jt;function L0(i,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Ou(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,b,f,c){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(v,_):_.isMeshToonMaterial?(s(v,_),p(v,_)):_.isMeshPhongMaterial?(s(v,_),u(v,_)):_.isMeshStandardMaterial?(s(v,_),g(v,_),_.isMeshPhysicalMaterial&&m(v,_,c)):_.isMeshMatcapMaterial?(s(v,_),M(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),E(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&a(v,_)):_.isPointsMaterial?h(v,_,b,f):_.isSpriteMaterial?d(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Fe&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Fe&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=t.get(_),f=b.envMap,c=b.envMapRotation;f&&(v.envMap.value=f,Ai.copy(c),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),v.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(Ai)),v.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function a(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,b,f){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=f*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function u(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fe&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const b=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U0(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,f){const c=f.program;n.uniformBlockBinding(b,c)}function d(b,f){let c=r[b.id];c===void 0&&(M(b),c=u(b),r[b.id]=c,b.addEventListener("dispose",v));const S=f.program;n.updateUBOMapping(b,S);const l=t.render.frame;s[b.id]!==l&&(g(b),s[b.id]=l)}function u(b){const f=p();b.__bindingPointIndex=f;const c=i.createBuffer(),S=b.__size,l=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,S,l),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,f,c),c}function p(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const f=r[b.id],c=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,f);for(let l=0,R=c.length;l<R;l++){const w=Array.isArray(c[l])?c[l]:[c[l]];for(let x=0,y=w.length;x<y;x++){const A=w[x];if(m(A,l,x,S)===!0){const T=A.__offset,C=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let N=0;N<C.length;N++){const O=C[N],F=E(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,T+L,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,f,c,S){const l=b.value,R=f+"_"+c;if(S[R]===void 0)return typeof l=="number"||typeof l=="boolean"?S[R]=l:S[R]=l.clone(),!0;{const w=S[R];if(typeof l=="number"||typeof l=="boolean"){if(w!==l)return S[R]=l,!0}else if(w.equals(l)===!1)return w.copy(l),!0}return!1}function M(b){const f=b.uniforms;let c=0;const S=16;for(let R=0,w=f.length;R<w;R++){const x=Array.isArray(f[R])?f[R]:[f[R]];for(let y=0,A=x.length;y<A;y++){const T=x[y],C=Array.isArray(T.value)?T.value:[T.value];for(let L=0,N=C.length;L<N;L++){const O=C[L],F=E(O),k=c%S,Z=k%F.boundary,Q=k+Z;c+=Z,Q!==0&&S-Q<F.storage&&(c+=S-Q),T.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=c,c+=F.storage}}}const l=c%S;return l>0&&(c+=S-l),b.__size=c,b.__cache={},this}function E(b){const f={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(f.boundary=4,f.storage=4):b.isVector2?(f.boundary=8,f.storage=8):b.isVector3||b.isColor?(f.boundary=16,f.storage=12):b.isVector4?(f.boundary=16,f.storage=16):b.isMatrix3?(f.boundary=48,f.storage=48):b.isMatrix4?(f.boundary=64,f.storage=64):b.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):kt("WebGLRenderer: Unsupported uniform value type.",b),f}function v(b){const f=b.target;f.removeEventListener("dispose",v);const c=o.indexOf(f.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[f.id]),delete r[f.id],delete s[f.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:h,update:d,dispose:_}}const N0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function F0(){return Sn===null&&(Sn=new Pf(N0,16,16,wr,Kn),Sn.name="DFG_LUT",Sn.minFilter=Pe,Sn.magFilter=Pe,Sn.wrapS=Xn,Sn.wrapT=Xn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class O0{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:m=cn}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=o;const E=m,v=new Set([ql,$l,Xl]),_=new Set([cn,Dn,jr,Jr,Gl,Wl]),b=new Uint32Array(4),f=new Int32Array(4);let c=null,S=null;const l=[],R=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=on;let A=0,T=0,C=null,L=-1,N=null;const O=new ce,F=new ce;let k=null;const Z=new ie(0);let Q=0,J=e.width,st=e.height,ht=1,yt=null,vt=null;const q=new ce(0,0,J,st),K=new ce(0,0,J,st);let et=!1;const at=new Hu;let nt=!1,Et=!1;const Kt=new jt,At=new U,Rt=new ce,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Ut(){return C===null?ht:1}let B=n;function Ht(D,H){return e.getContext(D,H)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rs}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",te,!1),B===null){const H="webgl2";if(B=Ht(H,D),B===null)throw Ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Qt("WebGLRenderer: "+D.message),D}let It,Ot,lt,I,P,z,X,j,W,ct,ut,wt,Bt,rt,pt,Ct,Dt,ft,qt,V,xt,ot,Mt,it;function tt(){It=new Fm(B),It.init(),ot=new w0(B,It),Ot=new wm(B,It,t,ot),lt=new A0(B,It),Ot.reversedDepthBuffer&&g&&lt.buffers.depth.setReversed(!0),I=new zm(B),P=new h0,z=new T0(B,It,lt,P,Ot,ot,I),X=new Rm(x),j=new Nm(x),W=new Gf(B),Mt=new Am(B,W),ct=new Om(B,W,I,Mt),ut=new Hm(B,ct,W,I),qt=new Vm(B,Ot,z),Ct=new Cm(P),wt=new c0(x,X,j,It,Ot,Mt,Ct),Bt=new L0(x,P),rt=new d0,pt=new x0(It),ft=new bm(x,X,j,lt,ut,M,h),Dt=new E0(x,ut,Ot),it=new U0(B,I,Ot,lt),V=new Tm(B,It,I),xt=new Bm(B,It,I),I.programs=wt.programs,x.capabilities=Ot,x.extensions=It,x.properties=P,x.renderLists=rt,x.shadowMap=Dt,x.state=lt,x.info=I}tt(),E!==cn&&(w=new Gm(E,e.width,e.height,r,s));const dt=new D0(x,B);this.xr=dt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=It.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=It.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(D){D!==void 0&&(ht=D,this.setSize(J,st,!1))},this.getSize=function(D){return D.set(J,st)},this.setSize=function(D,H,Y=!0){if(dt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=D,st=H,e.width=Math.floor(D*ht),e.height=Math.floor(H*ht),Y===!0&&(e.style.width=D+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(J*ht,st*ht).floor()},this.setDrawingBufferSize=function(D,H,Y){J=D,st=H,ht=Y,e.width=Math.floor(D*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,D,H)},this.setEffects=function(D){if(E===cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let H=0;H<D.length;H++)if(D[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,H,Y,$){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,H,Y,$),lt.viewport(O.copy(q).multiplyScalar(ht).round())},this.getScissor=function(D){return D.copy(K)},this.setScissor=function(D,H,Y,$){D.isVector4?K.set(D.x,D.y,D.z,D.w):K.set(D,H,Y,$),lt.scissor(F.copy(K).multiplyScalar(ht).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(D){lt.setScissorTest(et=D)},this.setOpaqueSort=function(D){yt=D},this.setTransparentSort=function(D){vt=D},this.getClearColor=function(D){return D.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(D=!0,H=!0,Y=!0){let $=0;if(D){let G=!1;if(C!==null){const gt=C.texture.format;G=v.has(gt)}if(G){const gt=C.texture.type,bt=_.has(gt),_t=ft.getClearColor(),Tt=ft.getClearAlpha(),Lt=_t.r,Vt=_t.g,Nt=_t.b;bt?(b[0]=Lt,b[1]=Vt,b[2]=Nt,b[3]=Tt,B.clearBufferuiv(B.COLOR,0,b)):(f[0]=Lt,f[1]=Vt,f[2]=Nt,f[3]=Tt,B.clearBufferiv(B.COLOR,0,f))}else $|=B.COLOR_BUFFER_BIT}H&&($|=B.DEPTH_BUFFER_BIT),Y&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",te,!1),ft.dispose(),rt.dispose(),pt.dispose(),P.dispose(),X.dispose(),j.dispose(),ut.dispose(),Mt.dispose(),it.dispose(),wt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",cc),dt.removeEventListener("sessionend",hc),xi.stop()};function Gt(D){D.preventDefault(),bc("WebGLRenderer: Context Lost."),y=!0}function ae(){bc("WebGLRenderer: Context Restored."),y=!1;const D=I.autoReset,H=Dt.enabled,Y=Dt.autoUpdate,$=Dt.needsUpdate,G=Dt.type;tt(),I.autoReset=D,Dt.enabled=H,Dt.autoUpdate=Y,Dt.needsUpdate=$,Dt.type=G}function te(D){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function vn(D){const H=D.target;H.removeEventListener("dispose",vn),Ln(H)}function Ln(D){gd(D),P.remove(D)}function gd(D){const H=P.get(D).programs;H!==void 0&&(H.forEach(function(Y){wt.releaseProgram(Y)}),D.isShaderMaterial&&wt.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,Y,$,G,gt){H===null&&(H=Pt);const bt=G.isMesh&&G.matrixWorld.determinant()<0,_t=_d(D,H,Y,$,G);lt.setMaterial($,bt);let Tt=Y.index,Lt=1;if($.wireframe===!0){if(Tt=ct.getWireframeAttribute(Y),Tt===void 0)return;Lt=2}const Vt=Y.drawRange,Nt=Y.attributes.position;let Yt=Vt.start*Lt,re=(Vt.start+Vt.count)*Lt;gt!==null&&(Yt=Math.max(Yt,gt.start*Lt),re=Math.min(re,(gt.start+gt.count)*Lt)),Tt!==null?(Yt=Math.max(Yt,0),re=Math.min(re,Tt.count)):Nt!=null&&(Yt=Math.max(Yt,0),re=Math.min(re,Nt.count));const de=re-Yt;if(de<0||de===1/0)return;Mt.setup(G,$,_t,Y,Tt);let fe,oe=V;if(Tt!==null&&(fe=W.get(Tt),oe=xt,oe.setIndex(fe)),G.isMesh)$.wireframe===!0?(lt.setLineWidth($.wireframeLinewidth*Ut()),oe.setMode(B.LINES)):oe.setMode(B.TRIANGLES);else if(G.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),lt.setLineWidth(Ft*Ut()),G.isLineSegments?oe.setMode(B.LINES):G.isLineLoop?oe.setMode(B.LINE_LOOP):oe.setMode(B.LINE_STRIP)}else G.isPoints?oe.setMode(B.POINTS):G.isSprite&&oe.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ft=G._multiDrawStarts,ee=G._multiDrawCounts,Jt=G._multiDrawCount,Ke=Tt?W.get(Tt).bytesPerElement:1,Wi=P.get($).currentProgram.getUniforms();for(let Ze=0;Ze<Jt;Ze++)Wi.setValue(B,"_gl_DrawID",Ze),oe.render(Ft[Ze]/Ke,ee[Ze])}else if(G.isInstancedMesh)oe.renderInstances(Yt,de,G.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ee=Math.min(Y.instanceCount,Ft);oe.renderInstances(Yt,de,ee)}else oe.render(Yt,de)};function lc(D,H,Y){D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=Fe,D.needsUpdate=!0,hs(D,H,Y),D.side=Pn,D.needsUpdate=!0,hs(D,H,Y),D.side=_n):hs(D,H,Y)}this.compile=function(D,H,Y=null){Y===null&&(Y=D),S=pt.get(Y),S.init(H),R.push(S),Y.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),D!==Y&&D.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights();const $=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){const _t=gt[bt];lc(_t,Y,G),$.add(_t)}else lc(gt,Y,G),$.add(gt)}),S=R.pop(),$},this.compileAsync=function(D,H,Y=null){const $=this.compile(D,H,Y);return new Promise(G=>{function gt(){if($.forEach(function(bt){P.get(bt).currentProgram.isReady()&&$.delete(bt)}),$.size===0){G(D);return}setTimeout(gt,10)}It.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Do=null;function md(D){Do&&Do(D)}function cc(){xi.stop()}function hc(){xi.start()}const xi=new Xu;xi.setAnimationLoop(md),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(D){Do=D,dt.setAnimationLoop(D),D===null?xi.stop():xi.start()},dt.addEventListener("sessionstart",cc),dt.addEventListener("sessionend",hc),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Y=dt.enabled===!0&&dt.isPresenting===!0,$=w!==null&&(C===null||Y)&&w.begin(x,C);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(H),H=dt.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,H,C),S=pt.get(D,R.length),S.init(H),R.push(S),Kt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),at.setFromProjectionMatrix(Kt,bn,H.reversedDepth),Et=this.localClippingEnabled,nt=Ct.init(this.clippingPlanes,Et),c=rt.get(D,l.length),c.init(),l.push(c),dt.enabled===!0&&dt.isPresenting===!0){const bt=x.xr.getDepthSensingMesh();bt!==null&&Io(bt,H,-1/0,x.sortObjects)}Io(D,H,0,x.sortObjects),c.finish(),x.sortObjects===!0&&c.sort(yt,vt),St=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,St&&ft.addToRenderList(c,D),this.info.render.frame++,nt===!0&&Ct.beginShadows();const G=S.state.shadowsArray;if(Dt.render(G,D,H),nt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&w.hasRenderPass())===!1){const bt=c.opaque,_t=c.transmissive;if(S.setupLights(),H.isArrayCamera){const Tt=H.cameras;if(_t.length>0)for(let Lt=0,Vt=Tt.length;Lt<Vt;Lt++){const Nt=Tt[Lt];dc(bt,_t,D,Nt)}St&&ft.render(D);for(let Lt=0,Vt=Tt.length;Lt<Vt;Lt++){const Nt=Tt[Lt];uc(c,D,Nt,Nt.viewport)}}else _t.length>0&&dc(bt,_t,D,H),St&&ft.render(D),uc(c,D,H)}C!==null&&T===0&&(z.updateMultisampleRenderTarget(C),z.updateRenderTargetMipmap(C)),$&&w.end(x),D.isScene===!0&&D.onAfterRender(x,D,H),Mt.resetDefaultState(),L=-1,N=null,R.pop(),R.length>0?(S=R[R.length-1],nt===!0&&Ct.setGlobalState(x.clippingPlanes,S.state.camera)):S=null,l.pop(),l.length>0?c=l[l.length-1]:c=null};function Io(D,H,Y,$){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||at.intersectsSprite(D)){$&&Rt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Kt);const bt=ut.update(D),_t=D.material;_t.visible&&c.push(D,bt,_t,Y,Rt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||at.intersectsObject(D))){const bt=ut.update(D),_t=D.material;if($&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Rt.copy(D.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Rt.copy(bt.boundingSphere.center)),Rt.applyMatrix4(D.matrixWorld).applyMatrix4(Kt)),Array.isArray(_t)){const Tt=bt.groups;for(let Lt=0,Vt=Tt.length;Lt<Vt;Lt++){const Nt=Tt[Lt],Yt=_t[Nt.materialIndex];Yt&&Yt.visible&&c.push(D,bt,Yt,Y,Rt.z,Nt)}}else _t.visible&&c.push(D,bt,_t,Y,Rt.z,null)}}const gt=D.children;for(let bt=0,_t=gt.length;bt<_t;bt++)Io(gt[bt],H,Y,$)}function uc(D,H,Y,$){const{opaque:G,transmissive:gt,transparent:bt}=D;S.setupLightsView(Y),nt===!0&&Ct.setGlobalState(x.clippingPlanes,Y),$&&lt.viewport(O.copy($)),G.length>0&&cs(G,H,Y),gt.length>0&&cs(gt,H,Y),bt.length>0&&cs(bt,H,Y),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function dc(D,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){const Yt=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new Cn(1,1,{generateMipmaps:!0,type:Yt?Kn:cn,minFilter:Ui,samples:Ot.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const gt=S.state.transmissionRenderTarget[$.id],bt=$.viewport||O;gt.setSize(bt.z*x.transmissionResolutionScale,bt.w*x.transmissionResolutionScale);const _t=x.getRenderTarget(),Tt=x.getActiveCubeFace(),Lt=x.getActiveMipmapLevel();x.setRenderTarget(gt),x.getClearColor(Z),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),St&&ft.render(Y);const Vt=x.toneMapping;x.toneMapping=wn;const Nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),nt===!0&&Ct.setGlobalState(x.clippingPlanes,$),cs(D,Y,$),z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let re=0,de=H.length;re<de;re++){const fe=H[re],{object:oe,geometry:Ft,material:ee,group:Jt}=fe;if(ee.side===_n&&oe.layers.test($.layers)){const Ke=ee.side;ee.side=Fe,ee.needsUpdate=!0,fc(oe,Y,$,Ft,ee,Jt),ee.side=Ke,ee.needsUpdate=!0,Yt=!0}}Yt===!0&&(z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt))}x.setRenderTarget(_t,Tt,Lt),x.setClearColor(Z,Q),Nt!==void 0&&($.viewport=Nt),x.toneMapping=Vt}function cs(D,H,Y){const $=H.isScene===!0?H.overrideMaterial:null;for(let G=0,gt=D.length;G<gt;G++){const bt=D[G],{object:_t,geometry:Tt,group:Lt}=bt;let Vt=bt.material;Vt.allowOverride===!0&&$!==null&&(Vt=$),_t.layers.test(Y.layers)&&fc(_t,H,Y,Tt,Vt,Lt)}}function fc(D,H,Y,$,G,gt){D.onBeforeRender(x,H,Y,$,G,gt),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(x,H,Y,$,D,gt),G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,x.renderBufferDirect(Y,H,$,G,D,gt),G.side=Pn,G.needsUpdate=!0,x.renderBufferDirect(Y,H,$,G,D,gt),G.side=_n):x.renderBufferDirect(Y,H,$,G,D,gt),D.onAfterRender(x,H,Y,$,G,gt)}function hs(D,H,Y){H.isScene!==!0&&(H=Pt);const $=P.get(D),G=S.state.lights,gt=S.state.shadowsArray,bt=G.state.version,_t=wt.getParameters(D,G.state,gt,H,Y),Tt=wt.getProgramCacheKey(_t);let Lt=$.programs;$.environment=D.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(D.isMeshStandardMaterial?j:X).get(D.envMap||$.environment),$.envMapRotation=$.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,Lt===void 0&&(D.addEventListener("dispose",vn),Lt=new Map,$.programs=Lt);let Vt=Lt.get(Tt);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===bt)return gc(D,_t),Vt}else _t.uniforms=wt.getUniforms(D),D.onBeforeCompile(_t,x),Vt=wt.acquireProgram(_t,Tt),Lt.set(Tt,Vt),$.uniforms=_t.uniforms;const Nt=$.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Nt.clippingPlanes=Ct.uniform),gc(D,_t),$.needsLights=vd(D),$.lightsStateVersion=bt,$.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function pc(D){if(D.uniformsList===null){const H=D.currentProgram.getUniforms();D.uniformsList=lo.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function gc(D,H){const Y=P.get(D);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function _d(D,H,Y,$,G){H.isScene!==!0&&(H=Pt),z.resetTextureUnits();const gt=H.fog,bt=$.isMeshStandardMaterial?H.environment:null,_t=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cr,Tt=($.isMeshStandardMaterial?j:X).get($.envMap||bt),Lt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Vt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Nt=!!Y.morphAttributes.position,Yt=!!Y.morphAttributes.normal,re=!!Y.morphAttributes.color;let de=wn;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=x.toneMapping);const fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=fe!==void 0?fe.length:0,Ft=P.get($),ee=S.state.lights;if(nt===!0&&(Et===!0||D!==N)){const Le=D===N&&$.id===L;Ct.setState($,D,Le)}let Jt=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ee.state.version||Ft.outputColorSpace!==_t||G.isBatchedMesh&&Ft.batching===!1||!G.isBatchedMesh&&Ft.batching===!0||G.isBatchedMesh&&Ft.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ft.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ft.instancing===!1||!G.isInstancedMesh&&Ft.instancing===!0||G.isSkinnedMesh&&Ft.skinning===!1||!G.isSkinnedMesh&&Ft.skinning===!0||G.isInstancedMesh&&Ft.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ft.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ft.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ft.instancingMorph===!1&&G.morphTexture!==null||Ft.envMap!==Tt||$.fog===!0&&Ft.fog!==gt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ct.numPlanes||Ft.numIntersection!==Ct.numIntersection)||Ft.vertexAlphas!==Lt||Ft.vertexTangents!==Vt||Ft.morphTargets!==Nt||Ft.morphNormals!==Yt||Ft.morphColors!==re||Ft.toneMapping!==de||Ft.morphTargetsCount!==oe)&&(Jt=!0):(Jt=!0,Ft.__version=$.version);let Ke=Ft.currentProgram;Jt===!0&&(Ke=hs($,H,G));let Wi=!1,Ze=!1,Dr=!1;const le=Ke.getUniforms(),Ve=Ft.uniforms;if(lt.useProgram(Ke.program)&&(Wi=!0,Ze=!0,Dr=!0),$.id!==L&&(L=$.id,Ze=!0),Wi||N!==D){lt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),le.setValue(B,"projectionMatrix",D.projectionMatrix),le.setValue(B,"viewMatrix",D.matrixWorldInverse);const He=le.map.cameraPosition;He!==void 0&&He.setValue(B,At.setFromMatrixPosition(D.matrixWorld)),Ot.logarithmicDepthBuffer&&le.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&le.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),N!==D&&(N=D,Ze=!0,Dr=!0)}if(Ft.needsLights&&(ee.state.directionalShadowMap.length>0&&le.setValue(B,"directionalShadowMap",ee.state.directionalShadowMap,z),ee.state.spotShadowMap.length>0&&le.setValue(B,"spotShadowMap",ee.state.spotShadowMap,z),ee.state.pointShadowMap.length>0&&le.setValue(B,"pointShadowMap",ee.state.pointShadowMap,z)),G.isSkinnedMesh){le.setOptional(B,G,"bindMatrix"),le.setOptional(B,G,"bindMatrixInverse");const Le=G.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),le.setValue(B,"boneTexture",Le.boneTexture,z))}G.isBatchedMesh&&(le.setOptional(B,G,"batchingTexture"),le.setValue(B,"batchingTexture",G._matricesTexture,z),le.setOptional(B,G,"batchingIdTexture"),le.setValue(B,"batchingIdTexture",G._indirectTexture,z),le.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&le.setValue(B,"batchingColorTexture",G._colorsTexture,z));const nn=Y.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&qt.update(G,Y,Ke),(Ze||Ft.receiveShadow!==G.receiveShadow)&&(Ft.receiveShadow=G.receiveShadow,le.setValue(B,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ve.envMap.value=Tt,Ve.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(Ve.envMapIntensity.value=H.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=F0()),Ze&&(le.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&xd(Ve,Dr),gt&&$.fog===!0&&Bt.refreshFogUniforms(Ve,gt),Bt.refreshMaterialUniforms(Ve,$,ht,st,S.state.transmissionRenderTarget[D.id]),lo.upload(B,pc(Ft),Ve,z)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(lo.upload(B,pc(Ft),Ve,z),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&le.setValue(B,"center",G.center),le.setValue(B,"modelViewMatrix",G.modelViewMatrix),le.setValue(B,"normalMatrix",G.normalMatrix),le.setValue(B,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Le=$.uniformsGroups;for(let He=0,Lo=Le.length;He<Lo;He++){const vi=Le[He];it.update(vi,Ke),it.bind(vi,Ke)}}return Ke}function xd(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function vd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(D,H,Y){const $=P.get(D);$.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),P.get(D.texture).__webglTexture=H,P.get(D.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,H){const Y=P.get(D);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const Sd=B.createFramebuffer();this.setRenderTarget=function(D,H=0,Y=0){C=D,A=H,T=Y;let $=null,G=!1,gt=!1;if(D){const _t=P.get(D);if(_t.__useDefaultFramebuffer!==void 0){lt.bindFramebuffer(B.FRAMEBUFFER,_t.__webglFramebuffer),O.copy(D.viewport),F.copy(D.scissor),k=D.scissorTest,lt.viewport(O),lt.scissor(F),lt.setScissorTest(k),L=-1;return}else if(_t.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(_t.__hasExternalTextures)z.rebindTextures(D,P.get(D.texture).__webglTexture,P.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Vt=D.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&P.has(Vt)&&(D.width!==Vt.image.width||D.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Tt=D.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(gt=!0);const Lt=P.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Lt[H])?$=Lt[H][Y]:$=Lt[H],G=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?$=P.get(D).__webglMultisampledFramebuffer:Array.isArray(Lt)?$=Lt[Y]:$=Lt,O.copy(D.viewport),F.copy(D.scissor),k=D.scissorTest}else O.copy(q).multiplyScalar(ht).floor(),F.copy(K).multiplyScalar(ht).floor(),k=et;if(Y!==0&&($=Sd),lt.bindFramebuffer(B.FRAMEBUFFER,$)&&lt.drawBuffers(D,$),lt.viewport(O),lt.scissor(F),lt.setScissorTest(k),G){const _t=P.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,_t.__webglTexture,Y)}else if(gt){const _t=H;for(let Tt=0;Tt<D.textures.length;Tt++){const Lt=P.get(D.textures[Tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Tt,Lt.__webglTexture,Y,_t)}}else if(D!==null&&Y!==0){const _t=P.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_t.__webglTexture,Y)}L=-1},this.readRenderTargetPixels=function(D,H,Y,$,G,gt,bt,_t=0){if(!(D&&D.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){lt.bindFramebuffer(B.FRAMEBUFFER,Tt);try{const Lt=D.textures[_t],Vt=Lt.format,Nt=Lt.type;if(!Ot.textureFormatReadable(Vt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Nt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-$&&Y>=0&&Y<=D.height-G&&(D.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),B.readPixels(H,Y,$,G,ot.convert(Vt),ot.convert(Nt),gt))}finally{const Lt=C!==null?P.get(C).__webglFramebuffer:null;lt.bindFramebuffer(B.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(D,H,Y,$,G,gt,bt,_t=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(H>=0&&H<=D.width-$&&Y>=0&&Y<=D.height-G){lt.bindFramebuffer(B.FRAMEBUFFER,Tt);const Lt=D.textures[_t],Vt=Lt.format,Nt=Lt.type;if(!Ot.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),D.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),B.readPixels(H,Y,$,G,ot.convert(Vt),ot.convert(Nt),0);const re=C!==null?P.get(C).__webglFramebuffer:null;lt.bindFramebuffer(B.FRAMEBUFFER,re);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await nf(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.deleteBuffer(Yt),B.deleteSync(de),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,H=null,Y=0){const $=Math.pow(2,-Y),G=Math.floor(D.image.width*$),gt=Math.floor(D.image.height*$),bt=H!==null?H.x:0,_t=H!==null?H.y:0;z.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,bt,_t,G,gt),lt.unbindTexture()};const yd=B.createFramebuffer(),Md=B.createFramebuffer();this.copyTextureToTexture=function(D,H,Y=null,$=null,G=0,gt=null){gt===null&&(G!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=G,G=0):gt=0);let bt,_t,Tt,Lt,Vt,Nt,Yt,re,de;const fe=D.isCompressedTexture?D.mipmaps[gt]:D.image;if(Y!==null)bt=Y.max.x-Y.min.x,_t=Y.max.y-Y.min.y,Tt=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Vt=Y.min.y,Nt=Y.isBox3?Y.min.z:0;else{const nn=Math.pow(2,-G);bt=Math.floor(fe.width*nn),_t=Math.floor(fe.height*nn),D.isDataArrayTexture?Tt=fe.depth:D.isData3DTexture?Tt=Math.floor(fe.depth*nn):Tt=1,Lt=0,Vt=0,Nt=0}$!==null?(Yt=$.x,re=$.y,de=$.z):(Yt=0,re=0,de=0);const oe=ot.convert(H.format),Ft=ot.convert(H.type);let ee;H.isData3DTexture?(z.setTexture3D(H,0),ee=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(z.setTexture2DArray(H,0),ee=B.TEXTURE_2D_ARRAY):(z.setTexture2D(H,0),ee=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const Jt=B.getParameter(B.UNPACK_ROW_LENGTH),Ke=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Wi=B.getParameter(B.UNPACK_SKIP_PIXELS),Ze=B.getParameter(B.UNPACK_SKIP_ROWS),Dr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Nt);const le=D.isDataArrayTexture||D.isData3DTexture,Ve=H.isDataArrayTexture||H.isData3DTexture;if(D.isDepthTexture){const nn=P.get(D),Le=P.get(H),He=P.get(nn.__renderTarget),Lo=P.get(Le.__renderTarget);lt.bindFramebuffer(B.READ_FRAMEBUFFER,He.__webglFramebuffer),lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Lo.__webglFramebuffer);for(let vi=0;vi<Tt;vi++)le&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(D).__webglTexture,G,Nt+vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(H).__webglTexture,gt,de+vi)),B.blitFramebuffer(Lt,Vt,bt,_t,Yt,re,bt,_t,B.DEPTH_BUFFER_BIT,B.NEAREST);lt.bindFramebuffer(B.READ_FRAMEBUFFER,null),lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||P.has(D)){const nn=P.get(D),Le=P.get(H);lt.bindFramebuffer(B.READ_FRAMEBUFFER,yd),lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Md);for(let He=0;He<Tt;He++)le?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,G,Nt+He):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,G),Ve?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.__webglTexture,gt,de+He):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Le.__webglTexture,gt),G!==0?B.blitFramebuffer(Lt,Vt,bt,_t,Yt,re,bt,_t,B.COLOR_BUFFER_BIT,B.NEAREST):Ve?B.copyTexSubImage3D(ee,gt,Yt,re,de+He,Lt,Vt,bt,_t):B.copyTexSubImage2D(ee,gt,Yt,re,Lt,Vt,bt,_t);lt.bindFramebuffer(B.READ_FRAMEBUFFER,null),lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ve?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(ee,gt,Yt,re,de,bt,_t,Tt,oe,Ft,fe.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(ee,gt,Yt,re,de,bt,_t,Tt,oe,fe.data):B.texSubImage3D(ee,gt,Yt,re,de,bt,_t,Tt,oe,Ft,fe):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,gt,Yt,re,bt,_t,oe,Ft,fe.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,gt,Yt,re,fe.width,fe.height,oe,fe.data):B.texSubImage2D(B.TEXTURE_2D,gt,Yt,re,bt,_t,oe,Ft,fe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Wi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Dr),gt===0&&H.generateMipmaps&&B.generateMipmap(ee),lt.unbindTexture()},this.initRenderTarget=function(D){P.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),lt.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,lt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const fh={type:"change"},Jl={type:"start"},Zu={type:"end"},Ls=new os,ph=new ln,B0=Math.cos(70*sf.DEG2RAD),xe=new U,Ge=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ua=1e-6;class z0 extends Hf{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new zi,this._lastTargetPosition=new U,this._quat=new zi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hc,this._sphericalDelta=new Hc,this._scale=1,this._panOffset=new U,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new U,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=H0.bind(this),this._onPointerDown=V0.bind(this),this._onPointerUp=k0.bind(this),this._onContextMenu=K0.bind(this),this._onMouseWheel=X0.bind(this),this._onKeyDown=$0.bind(this),this._onTouchStart=q0.bind(this),this._onTouchMove=Y0.bind(this),this._onMouseDown=G0.bind(this),this._onMouseMove=W0.bind(this),this._interceptControlDown=Z0.bind(this),this._interceptControlUp=j0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fh),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ge:n>Math.PI&&(n-=Ge),r<-Math.PI?r+=Ge:r>Math.PI&&(r-=Ge),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;const d=new U(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ls.origin.copy(this.object.position),Ls.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ls.direction))<B0?this.object.lookAt(this.target):(ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ls.intersectPlane(ph,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ua||this._lastTargetPosition.distanceToSquared(this.target)>ua?(this.dispatchEvent(fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ge/60*this.autoRotateSpeed*t:Ge/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xe.copy(r).sub(this.target);let s=xe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ge*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ge*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function V0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function H0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function k0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zu),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function G0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Mr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Mr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Jl)}function W0(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function X0(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zu))}function $0(i){this.enabled!==!1&&this._handleKeyDown(i)}function q0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Jl)}function Y0(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function K0(i){this.enabled!==!1&&i.preventDefault()}function Z0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Rn{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Rn.nextNameID=Rn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Rn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class J0 extends Rn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Dl(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const Q0={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Dl,toHexString:Dl},es={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},tx={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=es.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>es.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},ex={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=es.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>es.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},nx=[Q0,es,tx,ex];class ix extends Rn{constructor(t,e,n,r){var s;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,nx.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Dl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class da extends Rn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class rx extends Rn{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=u=>{const p=parseFloat(this.$input.value);isNaN(p)||(this._snapClampSetValue(p+u),this.$input.value=this.getValue())};let e,n,r,s,o,a=!1;const h=u=>{if(a){const p=u.clientX-e,g=u.clientY-n;Math.abs(g)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(p)>5&&d()}if(!a){const p=u.clientY-r;o-=p*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=u.clientY},d=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",d)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),t(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{e=u.clientX,n=r=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",d)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=g=>{const m=this.$slider.getBoundingClientRect();let M=(E=g,v=m.left,_=m.right,b=this._min,f=this._max,(E-v)/(_-v)*(f-b)+b);var E,v,_,b,f;this._snapClampSetValue(M)},e=g=>{t(g.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let r,s,o=!1;const a=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),o=!1},h=g=>{if(o){const m=g.touches[0].clientX-r,M=g.touches[0].clientY-s;Math.abs(m)>Math.abs(M)?a(g):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else g.preventDefault(),t(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},u=this._callOnFinishChange.bind(this);let p;this.$slider.addEventListener("mousedown",g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",g=>{g.touches.length>1||(this._hasScrollBar?(r=g.touches[0].clientX,s=g.touches[0].clientY,o=!0):a(g),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},{passive:!1}),this.$slider.addEventListener("wheel",g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const m=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class sx extends Rn{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ox extends Rn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let gh=!1;class Ql{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{h.code!=="Enter"&&h.code!=="Space"||(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!gh&&o&&((function(h){const d=document.createElement("style");d.innerHTML=h;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(d,u):document.head.appendChild(d)})('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),gh=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,e,n,r,s){if(Object(n)===n)return new sx(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new rx(this,t,e,n,r,s);case"boolean":return new J0(this,t,e);case"string":return new ox(this,t,e);case"function":return new da(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new ix(this,t,e,n)}addFolder(t){return new Ql({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof da||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof da)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const ju=0,ax=1,lx=2,mh=2,fa=1.25,_h=1,De=32,ve=De/4,Ju=65535,co=Math.pow(2,-24),tc=Symbol("SKIP_GENERATION"),Qu={strategy:ju,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[tc]:!1};function pe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function xh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function vh(i,t){t.set(i)}function Sh(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Us(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function zr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Se(i,t){return t[i+15]===Ju}function Ie(i,t){return t[i+6]}function Ne(i,t){return t[i+14]}function be(i){return i+ve}function Ae(i,t){const e=t[i+6];return i+e*ve}function ec(i,t){return t[i+7]}function pa(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,d=-1/0,u=-1/0,p=1/0,g=1/0,m=1/0,M=-1/0,E=-1/0,v=-1/0;const _=i.offset||0;for(let b=(t-_)*6,f=(t+e-_)*6;b<f;b+=6){const c=i[b+0],S=i[b+1],l=c-S,R=c+S;l<s&&(s=l),R>h&&(h=R),c<p&&(p=c),c>M&&(M=c);const w=i[b+2],x=i[b+3],y=w-x,A=w+x;y<o&&(o=y),A>d&&(d=A),w<g&&(g=w),w>E&&(E=w);const T=i[b+4],C=i[b+5],L=T-C,N=T+C;L<a&&(a=L),N>u&&(u=N),T<m&&(m=T),T>v&&(v=T)}n[0]=s,n[1]=o,n[2]=a,n[3]=h,n[4]=d,n[5]=u,r[0]=p,r[1]=g,r[2]=m,r[3]=M,r[4]=E,r[5]=v}const Hn=32,cx=(i,t)=>i.candidate-t.candidate,ai=new Array(Hn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ns=new Float32Array(6);function hx(i,t,e,n,r,s){let o=-1,a=0;if(s===ju)o=xh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===ax)o=xh(i),o!==-1&&(a=ux(e,n,r,o));else if(s===lx){const h=zr(i);let d=fa*r;const u=e.offset||0,p=(n-u)*6,g=(n+r-u)*6;for(let m=0;m<3;m++){const M=t[m],_=(t[m+3]-M)/Hn;if(r<Hn/4){const b=[...ai];b.length=r;let f=0;for(let S=p;S<g;S+=6,f++){const l=b[f];l.candidate=e[S+2*m],l.count=0;const{bounds:R,leftCacheBounds:w,rightCacheBounds:x}=l;for(let y=0;y<3;y++)x[y]=1/0,x[y+3]=-1/0,w[y]=1/0,w[y+3]=-1/0,R[y]=1/0,R[y+3]=-1/0;Us(S,e,R)}b.sort(cx);let c=r;for(let S=0;S<c;S++){const l=b[S];for(;S+1<c&&b[S+1].candidate===l.candidate;)b.splice(S+1,1),c--}for(let S=p;S<g;S+=6){const l=e[S+2*m];for(let R=0;R<c;R++){const w=b[R];l>=w.candidate?Us(S,e,w.rightCacheBounds):(Us(S,e,w.leftCacheBounds),w.count++)}}for(let S=0;S<c;S++){const l=b[S],R=l.count,w=r-l.count,x=l.leftCacheBounds,y=l.rightCacheBounds;let A=0;R!==0&&(A=zr(x)/h);let T=0;w!==0&&(T=zr(y)/h);const C=_h+fa*(A*R+T*w);C<d&&(o=m,d=C,a=l.candidate)}}else{for(let c=0;c<Hn;c++){const S=ai[c];S.count=0,S.candidate=M+_+c*_;const l=S.bounds;for(let R=0;R<3;R++)l[R]=1/0,l[R+3]=-1/0}for(let c=p;c<g;c+=6){let R=~~((e[c+2*m]-M)/_);R>=Hn&&(R=Hn-1);const w=ai[R];w.count++,Us(c,e,w.bounds)}const b=ai[Hn-1];vh(b.bounds,b.rightCacheBounds);for(let c=Hn-2;c>=0;c--){const S=ai[c],l=ai[c+1];Sh(S.bounds,l.rightCacheBounds,S.rightCacheBounds)}let f=0;for(let c=0;c<Hn-1;c++){const S=ai[c],l=S.count,R=S.bounds,x=ai[c+1].rightCacheBounds;l!==0&&(f===0?vh(R,Ns):Sh(R,Ns,Ns)),f+=l;let y=0,A=0;f!==0&&(y=zr(Ns)/h);const T=r-f;T!==0&&(A=zr(x)/h);const C=_h+fa*(y*f+A*T);C<d&&(o=m,d=C,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function ux(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}class ga{constructor(){this.boundingData=new Float32Array(6)}}function dx(i,t,e,n,r,s){let o=n,a=n+r-1;const h=s.pos,d=s.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+d]<h;)o++;for(;o<=a&&e[(a-u)*6+d]>=h;)a--;if(o<a){for(let p=0;p<t;p++){let g=i[o*t+p];i[o*t+p]=i[a*t+p],i[a*t+p]=g}for(let p=0;p<6;p++){const g=o-u,m=a-u,M=e[g*6+p];e[g*6+p]=e[m*6+p],e[m*6+p]=M}o++,a--}else return o}}let td,ho,Il,ed;const fx=Math.pow(2,32);function Ll(i){return"count"in i?1:1+Ll(i.left)+Ll(i.right)}function px(i,t,e){return td=new Float32Array(e),ho=new Uint32Array(e),Il=new Uint16Array(e),ed=new Uint8Array(e),Ul(i,t)}function Ul(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)td[e+o]=s[o];if(r)return t.buffer?(ed.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(ho[e+6]=t.offset,Il[n+14]=t.count,Il[n+15]=Ju,i+De);{const{left:o,right:a,splitAxis:h}=t,d=i+De;let u=Ul(d,o);const p=i/De,m=u/De-p;if(m>fx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return ho[e+6]=m,ho[e+7]=h,Ul(u,a)}}function gx(i,t,e,n,r,s){const{maxDepth:o,verbose:a,maxLeafSize:h,strategy:d,onProgress:u}=r,p=i.primitiveBuffer,g=i.primitiveBufferStride,m=new Float32Array(6);let M=!1;const E=new ga;return pa(t,e,n,E.boundingData,m),_(E,e,n,m),E;function v(b){u&&u((b-s.offset)/s.count)}function _(b,f,c,S=null,l=0){if(!M&&l>=o&&(M=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),c<=h||l>=o)return v(f+c),b.offset=f,b.count=c,b;const R=hx(b.boundingData,S,t,f,c,d);if(R.axis===-1)return v(f+c),b.offset=f,b.count=c,b;const w=dx(p,g,t,f,c,R);if(w===f||w===f+c)v(f+c),b.offset=f,b.count=c;else{b.splitAxis=R.axis;const x=new ga,y=f,A=w-f;b.left=x,pa(t,y,A,x.boundingData,m),_(x,y,A,m,l+1);const T=new ga,C=w,L=c-A;b.right=T,pa(t,C,L,T.boundingData,m),_(T,C,L,m,l+1)}return b}}function mx(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(h=>{const d=gx(i,a,h.offset,h.count,t,o),u=Ll(d),p=new e(De*u);return px(0,d,p),p})}class nc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class _x{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ue=new _x;let pi,Sr;const ar=[],Fs=new nc(()=>new Be);function xx(i,t,e,n,r,s){pi=Fs.getPrimitive(),Sr=Fs.getPrimitive(),ar.push(pi,Sr),ue.setBuffer(i._roots[t]);const o=Nl(0,i.geometry,e,n,r,s);ue.clearBuffer(),Fs.releasePrimitive(pi),Fs.releasePrimitive(Sr),ar.pop(),ar.pop();const a=ar.length;return a>0&&(Sr=ar[a-1],pi=ar[a-2]),o}function Nl(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:h,uint32Array:d}=ue;let u=i*2;if(Se(u,h)){const M=Ie(i,d),E=Ne(u,h);return pe(i,a,pi),n(M,E,!1,o,s+i/ve,pi)}else{let T=function(L){const{uint16Array:N,uint32Array:O}=ue;let F=L*2;for(;!Se(F,N);)L=be(L),F=L*2;return Ie(L,O)},C=function(L){const{uint16Array:N,uint32Array:O}=ue;let F=L*2;for(;!Se(F,N);)L=Ae(L,O),F=L*2;return Ie(L,O)+Ne(F,N)};var g=T,m=C;const M=be(i),E=Ae(i,d);let v=M,_=E,b,f,c,S;if(r&&(c=pi,S=Sr,pe(v,a,c),pe(_,a,S),b=r(c),f=r(S),f<b)){v=E,_=M;const L=b;b=f,f=L,c=S}c||(c=pi,pe(v,a,c));const l=Se(v*2,h),R=e(c,l,b,o+1,s+v/ve);let w;if(R===mh){const L=T(v),O=C(v)-L;w=n(L,O,!0,o+1,s+v/ve,c)}else w=R&&Nl(v,t,e,n,r,s,o+1);if(w)return!0;S=Sr,pe(_,a,S);const x=Se(_*2,h),y=e(S,x,f,o+1,s+_/ve);let A;if(y===mh){const L=T(_),O=C(_)-L;A=n(L,O,!0,o+1,s+_/ve,S)}else A=y&&Nl(_,t,e,n,r,s,o+1);return!!A}}const Kr=new ue.constructor,xo=new ue.constructor,ci=new nc(()=>new Be),lr=new Be,cr=new Be,ma=new Be,_a=new Be;let xa=!1;function vx(i,t,e,n){if(xa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");xa=!0;const r=i._roots,s=t._roots;let o,a=0,h=0;const d=new jt().copy(e).invert();for(let u=0,p=r.length;u<p;u++){Kr.setBuffer(r[u]),h=0;const g=ci.getPrimitive();pe(0,Kr.float32Array,g),g.applyMatrix4(d);for(let m=0,M=s.length;m<M&&(xo.setBuffer(s[m]),o=mn(0,0,e,d,n,a,h,0,0,g),xo.clearBuffer(),h+=s[m].byteLength/De,!o);m++);if(ci.releasePrimitive(g),Kr.clearBuffer(),a+=r[u].byteLength/De,o)break}return xa=!1,o}function mn(i,t,e,n,r,s=0,o=0,a=0,h=0,d=null,u=!1){let p,g;u?(p=xo,g=Kr):(p=Kr,g=xo);const m=p.float32Array,M=p.uint32Array,E=p.uint16Array,v=g.float32Array,_=g.uint32Array,b=g.uint16Array,f=i*2,c=t*2,S=Se(f,E),l=Se(c,b);let R=!1;if(l&&S)u?R=r(Ie(t,_),Ne(t*2,b),Ie(i,M),Ne(i*2,E),h,o+t/ve,a,s+i/ve):R=r(Ie(i,M),Ne(i*2,E),Ie(t,_),Ne(t*2,b),a,s+i/ve,h,o+t/ve);else if(l){const w=ci.getPrimitive();pe(t,v,w),w.applyMatrix4(e);const x=be(i),y=Ae(i,M);pe(x,m,lr),pe(y,m,cr);const A=w.intersectsBox(lr),T=w.intersectsBox(cr);R=A&&mn(t,x,n,e,r,o,s,h,a+1,w,!u)||T&&mn(t,y,n,e,r,o,s,h,a+1,w,!u),ci.releasePrimitive(w)}else{const w=be(t),x=Ae(t,_);pe(w,v,ma),pe(x,v,_a);const y=d.intersectsBox(ma),A=d.intersectsBox(_a);if(y&&A)R=mn(i,w,e,n,r,s,o,a,h+1,d,u)||mn(i,x,e,n,r,s,o,a,h+1,d,u);else if(y)if(S)R=mn(i,w,e,n,r,s,o,a,h+1,d,u);else{const T=ci.getPrimitive();T.copy(ma).applyMatrix4(e);const C=be(i),L=Ae(i,M);pe(C,m,lr),pe(L,m,cr);const N=T.intersectsBox(lr),O=T.intersectsBox(cr);R=N&&mn(w,C,n,e,r,o,s,h,a+1,T,!u)||O&&mn(w,L,n,e,r,o,s,h,a+1,T,!u),ci.releasePrimitive(T)}else if(A)if(S)R=mn(i,x,e,n,r,s,o,a,h+1,d,u);else{const T=ci.getPrimitive();T.copy(_a).applyMatrix4(e);const C=be(i),L=Ae(i,M);pe(C,m,lr),pe(L,m,cr);const N=T.intersectsBox(lr),O=T.intersectsBox(cr);R=N&&mn(x,C,n,e,r,o,s,h,a+1,T,!u)||O&&mn(x,L,n,e,r,o,s,h,a+1,T,!u),ci.releasePrimitive(T)}}return R}const yh=new Be,hr=new Float32Array(6);class Sx{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Qu,...t},mx(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,d=-1/0,u=-1/0;for(let p=t,g=t+e;p<g;p++){this.writePrimitiveBounds(p,hr,0);const[m,M,E,v,_,b]=hr;m<s&&(s=m),v>h&&(h=v),M<o&&(o=M),_>d&&(d=_),E<a&&(a=E),b>u&&(u=b)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=h,n[r+4]=d,n[r+5]=u,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,hr,0);const[a,h,d,u,p,g]=hr,m=(a+u)/2,M=(h+p)/2,E=(d+g)/2,v=(u-a)/2,_=(p-h)/2,b=(g-d)/2,f=(s-r)*6;n[f+0]=m,n[f+1]=v+(Math.abs(m)+v)*co,n[f+2]=M,n[f+3]=_+(Math.abs(M)+_)*co,n[f+4]=E,n[f+5]=b+(Math.abs(E)+b)*co}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),h=s.byteLength/De;for(let d=0;d<h;d++){const u=ve*d,p=2*u;Se(p,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,h=0){const d=a*2,u=Se(d,s);if(u){const p=r[a+6],g=s[d+14];t(h,u,new Float32Array(n,a*4,6),p,g)}else{const p=be(a),g=Ae(a,r),m=ec(a,r);t(h,u,new Float32Array(n,a*4,6),m)||(o(p,h+1),o(g,h+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),h=r.byteLength/De;for(let d=h-1;d>=0;d--){const u=d*ve,p=u*2;if(Se(p,o)){const m=Ie(u,s),M=Ne(p,o);this.writePrimitiveRangeBounds(m,M,hr,0),a.set(hr,u)}else{const m=be(u),M=Ae(u,s);for(let E=0;E<3;E++){const v=a[m+E],_=a[m+E+3],b=a[M+E],f=a[M+E+3];a[u+E]=v<b?v:b,a[u+E+3]=_>f?_:f}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{pe(0,new Float32Array(n),yh),t.union(yh)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const p=r;r=(g,m,M,E,v)=>p(g,m,M,E,v)?!0:a(g,m,this,s,M,E,o)}else r||(s?r=(p,g,m,M)=>a(p,g,this,s,m,M,o):r=(p,g,m)=>m);let h=!1,d=0;const u=this._roots;for(let p=0,g=u.length;p<g;p++){const m=u[p];if(h=xx(this,p,n,r,e,d),h)break;d+=m.byteLength/De}return h}bvhcast(t,e,n){let{intersectsRanges:r}=n;return vx(this,t,e,r)}}function yx(){return typeof SharedArrayBuffer<"u"}function ic(i){return i.index?i.index.count:i.attributes.position.count}function wo(i){return ic(i)/3}function Mx(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Ex(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Mx(e,n);i.setIndex(new $e(r,1));for(let s=0;s<e;s++)r[s]=s}}function bx(i,t,e){const n=ic(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),h=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(h)}}function Ax(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Mh(i,t,e){const n=bx(i,t,e),r=Ax(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,h=ic(i)/e,d=[];for(const g of r){const{offset:m,count:M}=g,E=m,v=isFinite(M)?M:h-m,_=m+v;E<a&&_>o&&(d.push({pos:Math.max(o,E),isStart:!0}),d.push({pos:Math.min(a,_),isStart:!1}))}d.sort((g,m)=>g.pos!==m.pos?g.pos-m.pos:g.type==="end"?-1:1);let u=0,p=null;for(const g of d){const m=g.pos;u!==0&&m!==p&&s.push({offset:p,count:m-p}),u+=g.isStart?1:-1,p=m}return s}function Tx(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((d,u)=>d+u.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let h=0;for(let d=0;d<i.length;d++){const{offset:u,count:p}=i[d];for(let g=0;g<p;g++)a[h+g]=u+g;h+=p}return a}class wx extends Sx{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!yx())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Qu,...e},e[tc]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=Mh(e,t.range,n),s=Tx(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Ex(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Be))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Mh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Jn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const h=t[s][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],h=t.dot(a);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Jn.prototype.setFromBox=(function(){const i=new U;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let u=0;u<=1;u++){i.x=r.x*h+s.x*(1-h),i.y=r.y*d+s.y*(1-d),i.z=r.z*u+s.z*(1-u);const p=e.dot(i);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();const Cx=(function(){const i=new U,t=new U,e=new U;return function(r,s,o){const a=r.start,h=i,d=s.start,u=t;e.subVectors(a,d),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const p=e.dot(u),g=u.dot(h),m=u.dot(u),M=e.dot(h),v=h.dot(h)*m-g*g;let _,b;v!==0?_=(p*g-M*m)/v:_=0,b=(p+_*g)/m,o.x=_,o.y=b}})(),rc=(function(){const i=new zt,t=new U,e=new U;return function(r,s,o,a){Cx(r,s,i);let h=i.x,d=i.y;if(h>=0&&h<=1&&d>=0&&d<=1){r.at(h,o),s.at(d,a);return}else if(h>=0&&h<=1){d<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(d>=0&&d<=1){h<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;h<0?u=r.start:u=r.end;let p;d<0?p=s.start:p=s.end;const g=t,m=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(u,!0,e),g.distanceToSquared(p)<=m.distanceToSquared(u)){o.copy(g),a.copy(p);return}else{o.copy(u),a.copy(m);return}}}})(),Rx=(function(){const i=new U,t=new U,e=new ln,n=new Te;return function(s,o){const{radius:a,center:h}=s,{a:d,b:u,c:p}=o;if(n.start=d,n.end=u,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a||(n.start=d,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a)||(n.start=u,n.end=p,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a))return!0;const E=o.getPlane(e);if(Math.abs(E.distanceToPoint(h))<=a){const _=E.projectPoint(h,t);if(o.containsPoint(_))return!0}return!1}})(),Px=["x","y","z"],kn=1e-15,Eh=kn*kn;function sn(i){return Math.abs(i)<kn}class Ye extends he{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new Jn),this.points=[this.a,this.b,this.c],this.plane=new ln,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Te,this.needsUpdate=!0}intersectsSphere(t){return Rx(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],h=o[0];this.getNormal(a),h.setFromPoints(a,r);const d=s[1],u=o[1];d.subVectors(t,e),u.setFromPoints(d,r);const p=s[2],g=o[2];p.subVectors(e,n),g.setFromPoints(p,r);const m=s[3],M=o[3];m.subVectors(n,t),M.setFromPoints(m,r);const E=d.length(),v=p.length(),_=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,E<kn?v<kn||_<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):v<kn?_<kn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<kn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Ye.prototype.closestPointToSegment=(function(){const i=new U,t=new U,e=new Te;return function(r,s=null,o=null){const{start:a,end:h}=r,d=this.points;let u,p=1/0;for(let g=0;g<3;g++){const m=(g+1)%3;e.start.copy(d[g]),e.end.copy(d[m]),rc(e,r,i,t),u=i.distanceToSquared(t),u<p&&(p=u,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<p&&(p=u,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(h,i),u=h.distanceToSquared(i),u<p&&(p=u,s&&s.copy(i),o&&o.copy(h)),Math.sqrt(p)}})();Ye.prototype.intersectsTriangle=(function(){const i=new Ye,t=new Jn,e=new Jn,n=new U,r=new U,s=new U,o=new U,a=new Te,h=new Te,d=new U,u=new zt,p=new zt;function g(f,c,S,l){const R=n;!f.isDegenerateIntoPoint&&!f.isDegenerateIntoSegment?R.copy(f.plane.normal):R.copy(c.plane.normal);const w=f.satBounds,x=f.satAxes;for(let T=1;T<4;T++){const C=w[T],L=x[T];if(t.setFromPoints(L,c.points),C.isSeparated(t)||(o.copy(R).cross(L),t.setFromPoints(o,f.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}const y=c.satBounds,A=c.satAxes;for(let T=1;T<4;T++){const C=y[T],L=A[T];if(t.setFromPoints(L,f.points),C.isSeparated(t)||(o.crossVectors(R,L),t.setFromPoints(o,f.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return S&&(l||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function m(f,c,S,l,R,w,x,y,A,T,C){let L=x/(x-y);T.x=l+(R-l)*L,C.start.subVectors(c,f).multiplyScalar(L).add(f),L=x/(x-A),T.y=l+(w-l)*L,C.end.subVectors(S,f).multiplyScalar(L).add(f)}function M(f,c,S,l,R,w,x,y,A,T,C){if(R>0)m(f.c,f.a,f.b,l,c,S,A,x,y,T,C);else if(w>0)m(f.b,f.a,f.c,S,c,l,y,x,A,T,C);else if(y*A>0||x!=0)m(f.a,f.b,f.c,c,S,l,x,y,A,T,C);else if(y!=0)m(f.b,f.a,f.c,S,c,l,y,x,A,T,C);else if(A!=0)m(f.c,f.a,f.b,l,c,S,A,x,y,T,C);else return!0;return!1}function E(f,c,S,l){const R=c.degenerateSegment,w=f.plane.distanceToPoint(R.start),x=f.plane.distanceToPoint(R.end);return sn(w)?sn(x)?g(f,c,S,l):(S&&(S.start.copy(R.start),S.end.copy(R.start)),f.containsPoint(R.start)):sn(x)?(S&&(S.start.copy(R.end),S.end.copy(R.end)),f.containsPoint(R.end)):f.plane.intersectLine(R,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),f.containsPoint(n)):!1}function v(f,c,S){const l=c.a;return sn(f.plane.distanceToPoint(l))&&f.containsPoint(l)?(S&&(S.start.copy(l),S.end.copy(l)),!0):!1}function _(f,c,S){const l=f.degenerateSegment,R=c.a;return l.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<Eh?(S&&(S.start.copy(R),S.end.copy(R)),!0):!1}function b(f,c,S,l){if(f.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){const R=f.degenerateSegment,w=c.degenerateSegment,x=r,y=s;R.delta(x),w.delta(y);const A=n.subVectors(w.start,R.start),T=x.x*y.y-x.y*y.x;if(sn(T))return!1;const C=(A.x*y.y-A.y*y.x)/T,L=-(x.x*A.y-x.y*A.x)/T;if(C<0||C>1||L<0||L>1)return!1;const N=R.start.z+x.z*C,O=w.start.z+y.z*L;return sn(N-O)?(S&&(S.start.copy(R.start).addScaledVector(x,C),S.end.copy(R.start).addScaledVector(x,C)),!0):!1}else return c.isDegenerateIntoPoint?_(f,c,S):E(c,f,S,l);else{if(f.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(f.a)<Eh?(S&&(S.start.copy(f.a),S.end.copy(f.a)),!0):!1:c.isDegenerateIntoSegment?_(c,f,S):v(c,f,S);if(c.isDegenerateIntoPoint)return v(f,c,S);if(c.isDegenerateIntoSegment)return E(f,c,S,l)}}return function(c,S=null,l=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);const R=b(this,c,S,l);if(R!==void 0)return R;const w=this.plane,x=c.plane;let y=x.distanceToPoint(this.a),A=x.distanceToPoint(this.b),T=x.distanceToPoint(this.c);sn(y)&&(y=0),sn(A)&&(A=0),sn(T)&&(T=0);const C=y*A,L=y*T;if(C>0&&L>0)return!1;let N=w.distanceToPoint(c.a),O=w.distanceToPoint(c.b),F=w.distanceToPoint(c.c);sn(N)&&(N=0),sn(O)&&(O=0),sn(F)&&(F=0);const k=N*O,Z=N*F;if(k>0&&Z>0)return!1;r.copy(w.normal),s.copy(x.normal);const Q=r.cross(s);let J=0,st=Math.abs(Q.x);const ht=Math.abs(Q.y);ht>st&&(st=ht,J=1),Math.abs(Q.z)>st&&(J=2);const vt=Px[J],q=this.a[vt],K=this.b[vt],et=this.c[vt],at=c.a[vt],nt=c.b[vt],Et=c.c[vt];if(M(this,q,K,et,C,L,y,A,T,u,a))return g(this,c,S,l);if(M(c,at,nt,Et,k,Z,N,O,F,p,h))return g(this,c,S,l);if(u.y<u.x){const Kt=u.y;u.y=u.x,u.x=Kt,d.copy(a.start),a.start.copy(a.end),a.end.copy(d)}if(p.y<p.x){const Kt=p.y;p.y=p.x,p.x=Kt,d.copy(h.start),h.start.copy(h.end),h.end.copy(d)}return u.y<p.x||p.y<u.x?!1:(S&&(p.x>u.x?S.start.copy(h.start):S.start.copy(a.start),p.y<u.y?S.end.copy(h.end):S.end.copy(a.end)),!0)}})();Ye.prototype.distanceToPoint=(function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ye.prototype.distanceToTriangle=(function(){const i=new U,t=new U,e=["a","b","c"],n=new Te,r=new Te;return function(o,a=null,h=null){const d=a||h?n:null;if(this.intersectsTriangle(o,d))return(a||h)&&(a&&d.getCenter(a),h&&d.getCenter(h)),0;let u=1/0;for(let p=0;p<3;p++){let g;const m=e[p],M=o[m];this.closestPointToPoint(M,i),g=M.distanceToSquared(i),g<u&&(u=g,a&&a.copy(i),h&&h.copy(M));const E=this[m];o.closestPointToPoint(E,i),g=E.distanceToSquared(i),g<u&&(u=g,a&&a.copy(E),h&&h.copy(i))}for(let p=0;p<3;p++){const g=e[p],m=e[(p+1)%3];n.set(this[g],this[m]);for(let M=0;M<3;M++){const E=e[M],v=e[(M+1)%3];r.set(o[E],o[v]),rc(n,r,i,t);const _=i.distanceToSquared(t);_<u&&(u=_,a&&a.copy(i),h&&h.copy(t))}}return Math.sqrt(u)}})();class ze{constructor(t,e,n){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new jt,this.invMatrix=new jt,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new Jn),this.alignedSatBounds=new Array(3).fill().map(()=>new Jn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}ze.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let d=0;d<=1;d++)for(let u=0;u<=1;u++)for(let p=0;p<=1;p++){const g=1*d|2*u|4*p,m=r[g];m.x=d?n.x:e.x,m.y=u?n.y:e.y,m.z=p?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let d=0;d<3;d++){const u=o[d],p=s[d],g=1<<d,m=r[g];u.subVectors(a,m),p.setFromPoints(u,r)}const h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();ze.prototype.intersectsBox=(function(){const i=new Jn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){const d=o[h],u=s[h];if(i.setFromBox(d,e),u.isSeparated(i))return!1}return!0}})();ze.prototype.intersectsTriangle=(function(){const i=new Ye,t=new Array(3),e=new Jn,n=new Jn,r=new U;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,h=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let g=0;g<3;g++){const m=a[g],M=h[g];if(e.setFromPoints(M,t),m.isSeparated(e))return!1}const d=o.satBounds,u=o.satAxes,p=this.points;for(let g=0;g<3;g++){const m=d[g],M=u[g];if(e.setFromPoints(M,p),m.isSeparated(e))return!1}for(let g=0;g<3;g++){const m=h[g];for(let M=0;M<4;M++){const E=u[M];if(r.crossVectors(m,E),e.setFromPoints(r,t),n.setFromPoints(r,p),e.isSeparated(n))return!1}}return!0}})();ze.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();ze.prototype.distanceToPoint=(function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();ze.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Te),e=new Array(12).fill().map(()=>new Te),n=new U,r=new U;return function(o,a=0,h=null,d=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(h||d)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),h&&h.copy(n),d&&d.copy(r)),0;const u=a*a,p=o.min,g=o.max,m=this.points;let M=1/0;for(let v=0;v<8;v++){const _=m[v];r.copy(_).clamp(p,g);const b=_.distanceToSquared(r);if(b<M&&(M=b,h&&h.copy(_),d&&d.copy(r),b<u))return Math.sqrt(b)}let E=0;for(let v=0;v<3;v++)for(let _=0;_<=1;_++)for(let b=0;b<=1;b++){const f=(v+1)%3,c=(v+2)%3,S=_<<f|b<<c,l=1<<v|_<<f|b<<c,R=m[S],w=m[l];t[E].set(R,w);const y=i[v],A=i[f],T=i[c],C=e[E],L=C.start,N=C.end;L[y]=p[y],L[A]=_?p[A]:g[A],L[T]=b?p[T]:g[A],N[y]=g[y],N[A]=_?p[A]:g[A],N[T]=b?p[T]:g[A],E++}for(let v=0;v<=1;v++)for(let _=0;_<=1;_++)for(let b=0;b<=1;b++){r.x=v?g.x:p.x,r.y=_?g.y:p.y,r.z=b?g.z:p.z,this.closestPointToPoint(r,n);const f=r.distanceToSquared(n);if(f<M&&(M=f,h&&h.copy(n),d&&d.copy(r),f<u))return Math.sqrt(f)}for(let v=0;v<12;v++){const _=t[v];for(let b=0;b<12;b++){const f=e[b];rc(_,f,n,r);const c=n.distanceToSquared(r);if(c<M&&(M=c,h&&h.copy(n),d&&d.copy(r),c<u))return Math.sqrt(c)}}return Math.sqrt(M)}})();class Dx extends nc{constructor(){super(()=>new Ye)}}const hn=new Dx,Vr=new U,va=new U;function Ix(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,h=null;if(i.shapecast({boundsTraverseOrder:u=>(Vr.copy(t).clamp(u.min,u.max),Vr.distanceToSquared(t)),intersectsBounds:(u,p,g)=>g<a&&g<o,intersectsTriangle:(u,p)=>{u.closestPointToPoint(t,Vr);const g=t.distanceToSquared(Vr);return g<a&&(va.copy(Vr),a=g,h=p),g<s}}),a===1/0)return null;const d=Math.sqrt(a);return e.point?e.point.copy(va):e.point=va.clone(),e.distance=d,e.faceIndex=h,e}const Os=parseInt(rs)>=169,Lx=parseInt(rs)<=161,Ti=new U,wi=new U,Ci=new U,Bs=new zt,zs=new zt,Vs=new zt,bh=new U,Ah=new U,Th=new U,Hr=new U;function Ux(i,t,e,n,r,s,o,a){let h;if(s===Fe?h=i.intersectTriangle(n,e,t,!0,r):h=i.intersectTriangle(t,e,n,s!==_n,r),h===null)return null;const d=i.origin.distanceTo(r);return d<o||d>a?null:{distance:d,point:r.clone()}}function wh(i,t,e,n,r,s,o,a,h,d,u){Ti.fromBufferAttribute(t,s),wi.fromBufferAttribute(t,o),Ci.fromBufferAttribute(t,a);const p=Ux(i,Ti,wi,Ci,Hr,h,d,u);if(p){if(n){Bs.fromBufferAttribute(n,s),zs.fromBufferAttribute(n,o),Vs.fromBufferAttribute(n,a),p.uv=new zt;const m=he.getInterpolation(Hr,Ti,wi,Ci,Bs,zs,Vs,p.uv);Os||(p.uv=m)}if(r){Bs.fromBufferAttribute(r,s),zs.fromBufferAttribute(r,o),Vs.fromBufferAttribute(r,a),p.uv1=new zt;const m=he.getInterpolation(Hr,Ti,wi,Ci,Bs,zs,Vs,p.uv1);Os||(p.uv1=m),Lx&&(p.uv2=p.uv1)}if(e){bh.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,o),Th.fromBufferAttribute(e,a),p.normal=new U;const m=he.getInterpolation(Hr,Ti,wi,Ci,bh,Ah,Th,p.normal);p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1),Os||(p.normal=m)}const g={a:s,b:o,c:a,normal:new U,materialIndex:0};if(he.getNormal(Ti,wi,Ci,g.normal),p.face=g,p.faceIndex=s,Os){const m=new U;he.getBarycoord(Hr,Ti,wi,Ci,m),p.barycoord=m}}return p}function Ch(i){return i&&i.isMaterial?i.side:i}function Co(i,t,e,n,r,s,o){const a=n*3;let h=a+0,d=a+1,u=a+2;const{index:p,groups:g}=i;i.index&&(h=p.getX(h),d=p.getX(d),u=p.getX(u));const{position:m,normal:M,uv:E,uv1:v}=i.attributes;if(Array.isArray(t)){const _=n*3;for(let b=0,f=g.length;b<f;b++){const{start:c,count:S,materialIndex:l}=g[b];if(_>=c&&_<c+S){const R=Ch(t[l]),w=wh(e,m,M,E,v,h,d,u,R,s,o);if(w)if(w.faceIndex=n,w.face.materialIndex=l,r)r.push(w);else return w}}}else{const _=Ch(t),b=wh(e,m,M,E,v,h,d,u,_,s,o);if(b)if(b.faceIndex=n,b.face.materialIndex=0,r)r.push(b);else return b}return null}function _e(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,h=t+1,d=t+2;e&&(a=e.getX(a),h=e.getX(h),d=e.getX(d)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(h),s.y=n.getY(h),s.z=n.getZ(h),o.x=n.getX(d),o.y=n.getY(d),o.z=n.getZ(d)}function Nx(i,t,e,n,r,s,o,a){const{geometry:h,_indirectBuffer:d}=i;for(let u=n,p=n+r;u<p;u++)Co(h,t,e,u,s,o,a)}function Fx(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:h}=i;let d=1/0,u=null;for(let p=n,g=n+r;p<g;p++){let m;m=Co(a,t,e,p,null,s,o),m&&m.distance<d&&(u=m,d=m.distance)}return u}function Ox(i,t,e,n,r,s,o){const{geometry:a}=e,{index:h}=a,d=a.attributes.position;for(let u=i,p=t+i;u<p;u++){let g;if(g=u,_e(o,g*3,h,d),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function Bx(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,h,d=0;const u=i._roots;for(let g=0,m=u.length;g<m;g++)s=u[g],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),p(0,d),d+=s.byteLength;function p(g,m,M=!1){const E=g*2;if(Se(E,a)){const v=Ie(g,o),_=Ne(E,a);let b=1/0,f=1/0,c=1/0,S=-1/0,l=-1/0,R=-1/0;for(let w=3*v,x=3*(v+_);w<x;w++){let y=n[w];const A=r.getX(y),T=r.getY(y),C=r.getZ(y);A<b&&(b=A),A>S&&(S=A),T<f&&(f=T),T>l&&(l=T),C<c&&(c=C),C>R&&(R=C)}return h[g+0]!==b||h[g+1]!==f||h[g+2]!==c||h[g+3]!==S||h[g+4]!==l||h[g+5]!==R?(h[g+0]=b,h[g+1]=f,h[g+2]=c,h[g+3]=S,h[g+4]=l,h[g+5]=R,!0):!1}else{const v=be(g),_=Ae(g,o);let b=M,f=!1,c=!1;if(t){if(!b){const y=v/ve+m/De,A=_/ve+m/De;f=t.has(y),c=t.has(A),b=!f&&!c}}else f=!0,c=!0;const S=b||f,l=b||c;let R=!1;S&&(R=p(v,m,b));let w=!1;l&&(w=p(_,m,b));const x=R||w;if(x)for(let y=0;y<3;y++){const A=v+y,T=_+y,C=h[A],L=h[A+3],N=h[T],O=h[T+3];h[g+y]=C<N?C:N,h[g+y+3]=L>O?L:O}return x}}}function _i(i,t,e,n,r){let s,o,a,h,d,u;const p=1/e.direction.x,g=1/e.direction.y,m=1/e.direction.z,M=e.origin.x,E=e.origin.y,v=e.origin.z;let _=t[i],b=t[i+3],f=t[i+1],c=t[i+3+1],S=t[i+2],l=t[i+3+2];return p>=0?(s=(_-M)*p,o=(b-M)*p):(s=(b-M)*p,o=(_-M)*p),g>=0?(a=(f-E)*g,h=(c-E)*g):(a=(c-E)*g,h=(f-E)*g),s>h||a>o||((a>s||isNaN(s))&&(s=a),(h<o||isNaN(o))&&(o=h),m>=0?(d=(S-v)*m,u=(l-v)*m):(d=(l-v)*m,u=(S-v)*m),s>u||d>o)?!1:((d>s||s!==s)&&(s=d),(u<o||o!==o)&&(o=u),s<=r&&o>=n)}function zx(i,t,e,n,r,s,o,a){const{geometry:h,_indirectBuffer:d}=i;for(let u=n,p=n+r;u<p;u++){let g=d?d[u]:u;Co(h,t,e,g,s,o,a)}}function Vx(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:h}=i;let d=1/0,u=null;for(let p=n,g=n+r;p<g;p++){let m;m=Co(a,t,e,h?h[p]:p,null,s,o),m&&m.distance<d&&(u=m,d=m.distance)}return u}function Hx(i,t,e,n,r,s,o){const{geometry:a}=e,{index:h}=a,d=a.attributes.position;for(let u=i,p=t+i;u<p;u++){let g;if(g=e.resolveTriangleIndex(u),_e(o,g*3,h,d),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function kx(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),Fl(0,i,e,n,r,s,o),ue.clearBuffer()}function Fl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:h,uint32Array:d}=ue,u=i*2;if(Se(u,h)){const g=Ie(i,d),m=Ne(u,h);Nx(t,e,n,g,m,r,s,o)}else{const g=be(i);_i(g,a,n,s,o)&&Fl(g,t,e,n,r,s,o);const m=Ae(i,d);_i(m,a,n,s,o)&&Fl(m,t,e,n,r,s,o)}}const Gx=["x","y","z"];function Wx(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=Ol(0,i,e,n,r,s);return ue.clearBuffer(),o}function Ol(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:h}=ue;let d=i*2;if(Se(d,a)){const p=Ie(i,h),g=Ne(d,a);return Fx(t,e,n,p,g,r,s)}else{const p=ec(i,h),g=Gx[p],M=n.direction[g]>=0;let E,v;M?(E=be(i),v=Ae(i,h)):(E=Ae(i,h),v=be(i));const b=_i(E,o,n,r,s)?Ol(E,t,e,n,r,s):null;if(b){const S=b.point[g];if(M?S<=o[v+p]:S>=o[v+p+3])return b}const c=_i(v,o,n,r,s)?Ol(v,t,e,n,r,s):null;return b&&c?b.distance<=c.distance?b:c:b||c||null}}const Hs=new Be,ur=new Ye,dr=new Ye,kr=new jt,Rh=new ze,ks=new ze;function Xx(i,t,e,n){ue.setBuffer(i._roots[t]);const r=Bl(0,i,e,n);return ue.clearBuffer(),r}function Bl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ue;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Rh.set(e.boundingBox.min,e.boundingBox.max,n),r=Rh),Se(h,o)){const u=t.geometry,p=u.index,g=u.attributes.position,m=e.index,M=e.attributes.position,E=Ie(i,a),v=Ne(h,o);if(kr.copy(n).invert(),e.boundsTree)return pe(i,s,ks),ks.matrix.copy(kr),ks.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:b=>ks.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(n),b.b.applyMatrix4(n),b.c.applyMatrix4(n),b.needsUpdate=!0;for(let f=E*3,c=(v+E)*3;f<c;f+=3)if(_e(dr,f,p,g),dr.needsUpdate=!0,b.intersectsTriangle(dr))return!0;return!1}});{const _=wo(e);for(let b=E*3,f=(v+E)*3;b<f;b+=3){_e(ur,b,p,g),ur.a.applyMatrix4(kr),ur.b.applyMatrix4(kr),ur.c.applyMatrix4(kr),ur.needsUpdate=!0;for(let c=0,S=_*3;c<S;c+=3)if(_e(dr,c,m,M),dr.needsUpdate=!0,ur.intersectsTriangle(dr))return!0}}}else{const u=be(i),p=Ae(i,a);return pe(u,s,Hs),!!(r.intersectsBox(Hs)&&Bl(u,t,e,n,r)||(pe(p,s,Hs),r.intersectsBox(Hs)&&Bl(p,t,e,n,r)))}}const Gs=new jt,Sa=new ze,Gr=new ze,$x=new U,qx=new U,Yx=new U,Kx=new U;function Zx(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Sa.set(t.boundingBox.min,t.boundingBox.max,e),Sa.needsUpdate=!0;const a=i.geometry,h=a.attributes.position,d=a.index,u=t.attributes.position,p=t.index,g=hn.getPrimitive(),m=hn.getPrimitive();let M=$x,E=qx,v=null,_=null;r&&(v=Yx,_=Kx);let b=1/0,f=null,c=null;return Gs.copy(e).invert(),Gr.matrix.copy(Gs),i.shapecast({boundsTraverseOrder:S=>Sa.distanceToBox(S),intersectsBounds:(S,l,R)=>R<b&&R<o?(l&&(Gr.min.copy(S.min),Gr.max.copy(S.max),Gr.needsUpdate=!0),!0):!1,intersectsRange:(S,l)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>Gr.distanceToBox(w),intersectsBounds:(w,x,y)=>y<b&&y<o,intersectsRange:(w,x)=>{for(let y=w,A=w+x;y<A;y++){_e(m,3*y,p,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let T=S,C=S+l;T<C;T++){_e(g,3*T,d,h),g.needsUpdate=!0;const L=g.distanceToTriangle(m,M,v);if(L<b&&(E.copy(M),_&&_.copy(v),b=L,f=T,c=y),L<s)return!0}}}});{const R=wo(t);for(let w=0,x=R;w<x;w++){_e(m,3*w,p,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let y=S,A=S+l;y<A;y++){_e(g,3*y,d,h),g.needsUpdate=!0;const T=g.distanceToTriangle(m,M,v);if(T<b&&(E.copy(M),_&&_.copy(v),b=T,f=y,c=w),T<s)return!0}}}}}),hn.releasePrimitive(g),hn.releasePrimitive(m),b===1/0?null:(n.point?n.point.copy(E):n.point=E.clone(),n.distance=b,n.faceIndex=f,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(Gs),E.applyMatrix4(Gs),r.distance=E.sub(r.point).length(),r.faceIndex=c),n)}function jx(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,h,d=0;const u=i._roots;for(let g=0,m=u.length;g<m;g++)s=u[g],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),p(0,d),d+=s.byteLength;function p(g,m,M=!1){const E=g*2;if(Se(E,a)){const v=Ie(g,o),_=Ne(E,a);let b=1/0,f=1/0,c=1/0,S=-1/0,l=-1/0,R=-1/0;for(let w=v,x=v+_;w<x;w++){const y=3*i.resolveTriangleIndex(w);for(let A=0;A<3;A++){let T=y+A;T=n?n[T]:T;const C=r.getX(T),L=r.getY(T),N=r.getZ(T);C<b&&(b=C),C>S&&(S=C),L<f&&(f=L),L>l&&(l=L),N<c&&(c=N),N>R&&(R=N)}}return h[g+0]!==b||h[g+1]!==f||h[g+2]!==c||h[g+3]!==S||h[g+4]!==l||h[g+5]!==R?(h[g+0]=b,h[g+1]=f,h[g+2]=c,h[g+3]=S,h[g+4]=l,h[g+5]=R,!0):!1}else{const v=be(g),_=Ae(g,o);let b=M,f=!1,c=!1;if(t){if(!b){const y=v/ve+m/De,A=_/ve+m/De;f=t.has(y),c=t.has(A),b=!f&&!c}}else f=!0,c=!0;const S=b||f,l=b||c;let R=!1;S&&(R=p(v,m,b));let w=!1;l&&(w=p(_,m,b));const x=R||w;if(x)for(let y=0;y<3;y++){const A=v+y,T=_+y,C=h[A],L=h[A+3],N=h[T],O=h[T+3];h[g+y]=C<N?C:N,h[g+y+3]=L>O?L:O}return x}}}function Jx(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),zl(0,i,e,n,r,s,o),ue.clearBuffer()}function zl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:h,uint32Array:d}=ue,u=i*2;if(Se(u,h)){const g=Ie(i,d),m=Ne(u,h);zx(t,e,n,g,m,r,s,o)}else{const g=be(i);_i(g,a,n,s,o)&&zl(g,t,e,n,r,s,o);const m=Ae(i,d);_i(m,a,n,s,o)&&zl(m,t,e,n,r,s,o)}}const Qx=["x","y","z"];function tv(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=Vl(0,i,e,n,r,s);return ue.clearBuffer(),o}function Vl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:h}=ue;let d=i*2;if(Se(d,a)){const p=Ie(i,h),g=Ne(d,a);return Vx(t,e,n,p,g,r,s)}else{const p=ec(i,h),g=Qx[p],M=n.direction[g]>=0;let E,v;M?(E=be(i),v=Ae(i,h)):(E=Ae(i,h),v=be(i));const b=_i(E,o,n,r,s)?Vl(E,t,e,n,r,s):null;if(b){const S=b.point[g];if(M?S<=o[v+p]:S>=o[v+p+3])return b}const c=_i(v,o,n,r,s)?Vl(v,t,e,n,r,s):null;return b&&c?b.distance<=c.distance?b:c:b||c||null}}const Ws=new Be,fr=new Ye,pr=new Ye,Wr=new jt,Ph=new ze,Xs=new ze;function ev(i,t,e,n){ue.setBuffer(i._roots[t]);const r=Hl(0,i,e,n);return ue.clearBuffer(),r}function Hl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ue;let h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Ph.set(e.boundingBox.min,e.boundingBox.max,n),r=Ph),Se(h,o)){const u=t.geometry,p=u.index,g=u.attributes.position,m=e.index,M=e.attributes.position,E=Ie(i,a),v=Ne(h,o);if(Wr.copy(n).invert(),e.boundsTree)return pe(i,s,Xs),Xs.matrix.copy(Wr),Xs.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:b=>Xs.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(n),b.b.applyMatrix4(n),b.c.applyMatrix4(n),b.needsUpdate=!0;for(let f=E,c=v+E;f<c;f++)if(_e(pr,3*t.resolveTriangleIndex(f),p,g),pr.needsUpdate=!0,b.intersectsTriangle(pr))return!0;return!1}});{const _=wo(e);for(let b=E,f=v+E;b<f;b++){const c=t.resolveTriangleIndex(b);_e(fr,3*c,p,g),fr.a.applyMatrix4(Wr),fr.b.applyMatrix4(Wr),fr.c.applyMatrix4(Wr),fr.needsUpdate=!0;for(let S=0,l=_*3;S<l;S+=3)if(_e(pr,S,m,M),pr.needsUpdate=!0,fr.intersectsTriangle(pr))return!0}}}else{const u=be(i),p=Ae(i,a);return pe(u,s,Ws),!!(r.intersectsBox(Ws)&&Hl(u,t,e,n,r)||(pe(p,s,Ws),r.intersectsBox(Ws)&&Hl(p,t,e,n,r)))}}const $s=new jt,ya=new ze,Xr=new ze,nv=new U,iv=new U,rv=new U,sv=new U;function ov(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ya.set(t.boundingBox.min,t.boundingBox.max,e),ya.needsUpdate=!0;const a=i.geometry,h=a.attributes.position,d=a.index,u=t.attributes.position,p=t.index,g=hn.getPrimitive(),m=hn.getPrimitive();let M=nv,E=iv,v=null,_=null;r&&(v=rv,_=sv);let b=1/0,f=null,c=null;return $s.copy(e).invert(),Xr.matrix.copy($s),i.shapecast({boundsTraverseOrder:S=>ya.distanceToBox(S),intersectsBounds:(S,l,R)=>R<b&&R<o?(l&&(Xr.min.copy(S.min),Xr.max.copy(S.max),Xr.needsUpdate=!0),!0):!1,intersectsRange:(S,l)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:w=>Xr.distanceToBox(w),intersectsBounds:(w,x,y)=>y<b&&y<o,intersectsRange:(w,x)=>{for(let y=w,A=w+x;y<A;y++){const T=R.resolveTriangleIndex(y);_e(m,3*T,p,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let C=S,L=S+l;C<L;C++){const N=i.resolveTriangleIndex(C);_e(g,3*N,d,h),g.needsUpdate=!0;const O=g.distanceToTriangle(m,M,v);if(O<b&&(E.copy(M),_&&_.copy(v),b=O,f=C,c=y),O<s)return!0}}}})}else{const R=wo(t);for(let w=0,x=R;w<x;w++){_e(m,3*w,p,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let y=S,A=S+l;y<A;y++){const T=i.resolveTriangleIndex(y);_e(g,3*T,d,h),g.needsUpdate=!0;const C=g.distanceToTriangle(m,M,v);if(C<b&&(E.copy(M),_&&_.copy(v),b=C,f=y,c=w),C<s)return!0}}}}}),hn.releasePrimitive(g),hn.releasePrimitive(m),b===1/0?null:(n.point?n.point.copy(E):n.point=E.clone(),n.distance=b,n.faceIndex=f,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4($s),E.applyMatrix4($s),r.distance=E.sub(r.point).length(),r.faceIndex=c),n)}function Dh(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const qs=new ze,Ys=new os,Ih=new U,Lh=new jt,Uh=new U,Ma=["getX","getY","getZ"];class vo extends wx{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(h=>h.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),h(s));const a=new vo(e,{...n,[tc]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const d=e.getIndex();if(d===null){const u=new $e(t.index,1,!1);e.setIndex(u)}else d.array!==r&&(d.array.set(r),d.needsUpdate=!0)}return a;function h(d){for(let u=0;u<d.length;u++){const p=d[u],g=new Uint32Array(p),m=new Uint16Array(p);for(let M=0,E=p.byteLength/De;M<E;M++){const v=ve*M,_=2*v;Se(_,m)||(g[v+6]=g[v+6]/ve-M)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,d=(s?s[t]:t)*3;let u=d+0,p=d+1,g=d+2;a&&(u=a[u],p=a[p],g=a[g]);for(let m=0;m<3;m++){const M=o[Ma[m]](u),E=o[Ma[m]](p),v=o[Ma[m]](g);let _=M;E<_&&(_=E),v<_&&(_=v);let b=M;E>b&&(b=E),v>b&&(b=v),e[n+m]=_,e[n+m+3]=b}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const d=o.array,u=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const g=["getX","getY","getZ"],m=n.offset;for(let M=t,E=t+e;M<E;M++){const _=(s?s[M]:M)*3,b=(M-m)*6;let f=_+0,c=_+1,S=_+2;a&&(f=a[f],c=a[c],S=a[S]),h||(f=f*p+u,c=c*p+u,S=S*p+u);for(let l=0;l<3;l++){let R,w,x;h?(R=o[g[l]](f),w=o[g[l]](c),x=o[g[l]](S)):(R=d[f+l],w=d[c+l],x=d[S+l]);let y=R;w<y&&(y=w),x<y&&(y=x);let A=R;w>A&&(A=w),x>A&&(A=x);const T=(A-y)/2,C=l*2;n[b+C+0]=y+T,n[b+C+1]=T+(Math.abs(y)+T)*co}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;Lh.copy(t.matrixWorld).invert(),Ys.copy(e.ray).applyMatrix4(Lh),Uh.setFromMatrixScale(t.matrixWorld),Ih.copy(Ys.direction).multiply(Uh);const s=Ih.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let h=this.raycastFirst(Ys,r,o,a);h=Dh(h,t,e),h&&n.push(h)}else{const h=this.raycast(Ys,r,o,a);for(let d=0,u=h.length;d<u;d++){const p=Dh(h[d],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?jx:Bx)(this,t)}raycast(t,e=Pn,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?Jx:kx;for(let h=0,d=s.length;h<d;h++)a(this,h,e,t,o,n,r);return o}raycastFirst(t,e=Pn,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?tv:Wx;for(let h=0,d=s.length;h<d;h++){const u=a(this,h,e,t,n,r);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?ev:Xx;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=hn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Hx:Ox});return hn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=hn.getPrimitive(),a=this.geometry.index,h=this.geometry.attributes.position,d=this.indirect?M=>{const E=this.resolveTriangleIndex(M);_e(o,E*3,a,h)}:M=>{_e(o,M*3,a,h)},u=hn.getPrimitive(),p=t.geometry.index,g=t.geometry.attributes.position,m=t.indirect?M=>{const E=t.resolveTriangleIndex(M);_e(u,E*3,p,g)}:M=>{_e(u,M*3,p,g)};if(s){if(!(t instanceof vo))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const M=(E,v,_,b,f,c,S,l)=>{for(let R=_,w=_+b;R<w;R++){m(R),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let x=E,y=E+v;x<y;x++)if(d(x),o.needsUpdate=!0,s(o,u,x,R,f,c,S,l))return!0}return!1};if(r){const E=r;r=function(v,_,b,f,c,S,l,R){return E(v,_,b,f,c,S,l,R)?!0:M(v,_,b,f,c,S,l,R)}}else r=M}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return qs.set(t.min,t.max,e),qs.needsUpdate=!0,this.shapecast({intersectsBounds:n=>qs.intersectsBox(n),intersectsTriangle:n=>qs.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?ov:Zx)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return Ix(this,t,e,n,r)}}const nd=1e-6,av=nd*.5,id=Math.pow(10,-Math.log10(nd)),lv=av*id;function An(i){return~~(i*id+lv)}function cv(i){return`${An(i.x)},${An(i.y)}`}function Nh(i){return`${An(i.x)},${An(i.y)},${An(i.z)}`}function hv(i){return`${An(i.x)},${An(i.y)},${An(i.z)},${An(i.w)}`}function uv(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function rd(){return typeof SharedArrayBuffer<"u"}function dv(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function fv(i){return i.index?i.index.count:i.attributes.position.count}function sc(i){return fv(i)/3}const pv=1e-8,gv=new U;function mv(i){return~~(i/3)}function _v(i){return i%3}function Fh(i,t){return i.start-t.start}function Oh(i,t){return gv.subVectors(t,i.origin).dot(i.direction)}function xv(i,t,e,n=pv){i.sort(Fh),t.sort(Fh);for(let a=0;a<i.length;a++){const h=i[a];for(let d=0;d<t.length;d++){const u=t[d];if(!(u.start>h.end)){if(h.end<u.start||u.end<h.start)continue;if(h.start<=u.start&&h.end>=u.end)s(u.end,h.end)||i.splice(a+1,0,{start:u.end,end:h.end,index:h.index}),h.end=u.start,u.start=0,u.end=0;else if(h.start>=u.start&&h.end<=u.end)s(h.end,u.end)||t.splice(d+1,0,{start:h.end,end:u.end,index:u.index}),u.end=h.start,h.start=0,h.end=0;else if(h.start<=u.start&&h.end<=u.end){const p=h.end;h.end=u.start,u.start=p}else if(h.start>=u.start&&h.end>=u.end){const p=u.end;u.end=h.start,h.start=p}else throw new Error}if(e.has(h.index)||e.set(h.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(h.index).push(u.index),e.get(u.index).push(h.index),o(u)&&(t.splice(d,1),d--),o(h)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let h=0;h<a.length;h++)o(a[h])&&(a.splice(h,1),h--)}function s(a,h){return Math.abs(h-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const Bh=1e-5,zh=1e-4;class vv{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let h=0,d=e.length;h<d;h++){const u=e[h];if(o(u,t)&&o(u,n))continue;const p=a(u,t),g=a(u,n),m=Math.min(p,g);m<r&&(r=m,s=u)}return s;function o(h,d){const u=h.origin.distanceTo(d.origin)>Bh;return h.direction.angleTo(d.direction)>zh||u}function a(h,d){const u=h.origin.distanceTo(d.origin),p=h.direction.angleTo(d.direction);return u/Bh+p/zh}}}const Ea=new U,ba=new U,Ks=new os;function Sv(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,h=Array.from(t),d=new vv;for(let u=0,p=h.length;u<p;u++){const g=h[u],m=mv(g),M=_v(g);let E=3*m+M,v=3*m+(M+1)%3;r&&(E=r.getX(E),v=r.getX(v)),Ea.fromBufferAttribute(s,E),ba.fromBufferAttribute(s,v),uv(Ea,ba,Ks);let _,b=d.findClosestRay(Ks);b===null&&(b=Ks.clone(),d.addRay(b)),a.has(b)||a.set(b,{forward:[],reverse:[],ray:b}),_=a.get(b);let f=Oh(b,Ea),c=Oh(b,ba);f>c&&([f,c]=[c,f]),Ks.direction.dot(b.direction)<0?_.reverse.push({start:f,end:c,index:g}):_.forward.push({start:f,end:c,index:g})}return a.forEach(({forward:u,reverse:p},g)=>{xv(u,p,o,e),u.length===0&&p.length===0&&a.delete(g)}),{disjointConnectivityMap:o,fragmentMap:a}}const yv=new zt,Aa=new U,Mv=new ce,Ta=["","",""];class Ev{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?f:b,a=new Map,{attributes:h}=t,d=e?Object.keys(h):null,u=t.index,p=h.position;let g=sc(t);const m=g;let M=0;n&&(M=t.drawRange.start,t.drawRange.count!==1/0&&(g=~~(t.drawRange.count/3)));let E=this.data;(!E||E.length<3*m)&&(E=new Int32Array(3*m)),E.fill(-1);let v=0,_=new Set;for(let c=M,S=g*3+M;c<S;c+=3){const l=c;for(let R=0;R<3;R++){let w=l+R;u&&(w=u.getX(w)),Ta[R]=o(w)}for(let R=0;R<3;R++){const w=(R+1)%3,x=Ta[R],y=Ta[w],A=`${y}_${x}`;if(a.has(A)){const T=l+R,C=a.get(A);E[T]=C,E[C]=T,a.delete(A),v+=2,_.delete(C)}else{const T=`${x}_${y}`,C=l+R;a.set(T,C),_.add(C)}}}if(r){const{fragmentMap:c,disjointConnectivityMap:S}=Sv(t,_,s);_.clear(),c.forEach(({forward:l,reverse:R})=>{l.forEach(({index:w})=>_.add(w)),R.forEach(({index:w})=>_.add(w))}),this.unmatchedDisjointEdges=c,this.disjointConnections=S,v=g*3-_.size}this.matchedEdges=v,this.unmatchedEdges=_.size,this.data=E;function b(c){return Aa.fromBufferAttribute(p,c),Nh(Aa)}function f(c){let S="";for(let l=0,R=d.length;l<R;l++){const w=h[d[l]];let x;switch(w.itemSize){case 1:x=An(w.getX(c));break;case 2:x=cv(yv.fromBufferAttribute(w,c));break;case 3:x=Nh(Aa.fromBufferAttribute(w,c));break;case 4:x=hv(Mv.fromBufferAttribute(w,c));break}S!==""&&(S+="|"),S+=x}return S}}}class So extends qe{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new jt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=rd(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,h=`${t.uuid}_${o}_${a}`;if(this._hash===h)return;if(this._hash=h,n)for(const g in e){const m=e[g];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=dv(m.array)}t.boundsTree=new vo(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Ev),t.halfEdges.updateFrom(t);const d=sc(t);(!t.groupIndices||t.groupIndices.length!==d)&&(t.groupIndices=new Uint16Array(d));const u=t.groupIndices,p=t.groups;for(let g=0,m=p.length;g<m;g++){const{start:M,count:E}=p[g];for(let v=M/3,_=(M+E)/3;v<_;v++)u[v]=g}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var bv=Object.getOwnPropertyNames,en=(i,t)=>function(){return t||(0,i[bv(i)[0]])((t={exports:{}}).exports,t),t.exports},Ro=en({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(h,d,u,p,g){for(var m=g+1;p<=g;){var M=p+g>>>1,E=h[M],v=u!==void 0?u(E,d):E-d;v>=0?(m=M,g=M-1):p=M+1}return m}function n(h,d,u,p,g){for(var m=g+1;p<=g;){var M=p+g>>>1,E=h[M],v=u!==void 0?u(E,d):E-d;v>0?(m=M,g=M-1):p=M+1}return m}function r(h,d,u,p,g){for(var m=p-1;p<=g;){var M=p+g>>>1,E=h[M],v=u!==void 0?u(E,d):E-d;v<0?(m=M,p=M+1):g=M-1}return m}function s(h,d,u,p,g){for(var m=p-1;p<=g;){var M=p+g>>>1,E=h[M],v=u!==void 0?u(E,d):E-d;v<=0?(m=M,p=M+1):g=M-1}return m}function o(h,d,u,p,g){for(;p<=g;){var m=p+g>>>1,M=h[m],E=u!==void 0?u(M,d):M-d;if(E===0)return m;E<=0?p=m+1:g=m-1}return-1}function a(h,d,u,p,g,m){return typeof u=="function"?m(h,d,u,p===void 0?0:p|0,g===void 0?h.length-1:g|0):m(h,d,void 0,u===void 0?0:u|0,p===void 0?h.length-1:p|0)}t.exports={ge:function(h,d,u,p,g){return a(h,d,u,p,g,e)},gt:function(h,d,u,p,g){return a(h,d,u,p,g,n)},lt:function(h,d,u,p,g){return a(h,d,u,p,g,r)},le:function(h,d,u,p,g){return a(h,d,u,p,g,s)},eq:function(h,d,u,p,g){return a(h,d,u,p,g,o)}}}}),oc=en({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,h=e*r,d=h-r,u=h-d,p=r-u,g=e*s,m=g-s,M=g-m,E=s-M,v=a-u*M,_=v-p*M,b=_-u*E,f=p*E-b;return o?(o[0]=f,o[1]=a,o):[f,a]}}}),sd=en({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,d=s-a,u=r-h,p=u+d;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var h=o+a,d=new Array(h),u=0,p=0,g=0,m=Math.abs,M=r[p],E=m(M),v=s[g],_=m(v),b,f;E<_?(f=M,p+=1,p<o&&(M=r[p],E=m(M))):(f=v,g+=1,g<a&&(v=s[g],_=m(v))),p<o&&E<_||g>=a?(b=M,p+=1,p<o&&(M=r[p],E=m(M))):(b=v,g+=1,g<a&&(v=s[g],_=m(v)));for(var c=b+f,S=c-b,l=f-S,R=l,w=c,x,y,A,T,C;p<o&&g<a;)E<_?(b=M,p+=1,p<o&&(M=r[p],E=m(M))):(b=v,g+=1,g<a&&(v=s[g],_=m(v))),f=R,c=b+f,S=c-b,l=f-S,l&&(d[u++]=l),x=w+c,y=x-w,A=x-y,T=c-y,C=w-A,R=C+T,w=x;for(;p<o;)b=M,f=R,c=b+f,S=c-b,l=f-S,l&&(d[u++]=l),x=w+c,y=x-w,A=x-y,T=c-y,C=w-A,R=C+T,w=x,p+=1,p<o&&(M=r[p]);for(;g<a;)b=v,f=R,c=b+f,S=c-b,l=f-S,l&&(d[u++]=l),x=w+c,y=x-w,A=x-y,T=c-y,C=w-A,R=C+T,w=x,g+=1,g<a&&(v=s[g]);return R&&(d[u++]=R),w&&(d[u++]=w),u||(d[u++]=0),d.length=u,d}}}),Av=en({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,h=o-a,d=r-a,u=n-h;return s?(s[0]=u+d,s[1]=o,s):[u+d,o]}}}),od=en({"node_modules/robust-scale/robust-scale.js"(i,t){var e=oc(),n=Av();t.exports=r;function r(s,o){var a=s.length;if(a===1){var h=e(s[0],o);return h[0]?h:[h[1]]}var d=new Array(2*a),u=[.1,.1],p=[.1,.1],g=0;e(s[0],o,u),u[0]&&(d[g++]=u[0]);for(var m=1;m<a;++m){e(s[m],o,p);var M=u[1];n(M,p[0],u),u[0]&&(d[g++]=u[0]);var E=p[1],v=u[1],_=E+v,b=_-E,f=v-b;u[1]=_,f&&(d[g++]=f)}return u[1]&&(d[g++]=u[1]),g===0&&(d[g++]=0),d.length=g,d}}}),ad=en({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,d=s-a,u=r-h,p=u+d;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var h=o+a,d=new Array(h),u=0,p=0,g=0,m=Math.abs,M=r[p],E=m(M),v=-s[g],_=m(v),b,f;E<_?(f=M,p+=1,p<o&&(M=r[p],E=m(M))):(f=v,g+=1,g<a&&(v=-s[g],_=m(v))),p<o&&E<_||g>=a?(b=M,p+=1,p<o&&(M=r[p],E=m(M))):(b=v,g+=1,g<a&&(v=-s[g],_=m(v)));for(var c=b+f,S=c-b,l=f-S,R=l,w=c,x,y,A,T,C;p<o&&g<a;)E<_?(b=M,p+=1,p<o&&(M=r[p],E=m(M))):(b=v,g+=1,g<a&&(v=-s[g],_=m(v))),f=R,c=b+f,S=c-b,l=f-S,l&&(d[u++]=l),x=w+c,y=x-w,A=x-y,T=c-y,C=w-A,R=C+T,w=x;for(;p<o;)b=M,f=R,c=b+f,S=c-b,l=f-S,l&&(d[u++]=l),x=w+c,y=x-w,A=x-y,T=c-y,C=w-A,R=C+T,w=x,p+=1,p<o&&(M=r[p]);for(;g<a;)b=v,f=R,c=b+f,S=c-b,l=f-S,l&&(d[u++]=l),x=w+c,y=x-w,A=x-y,T=c-y,C=w-A,R=C+T,w=x,g+=1,g<a&&(v=-s[g]);return R&&(d[u++]=R),w&&(d[u++]=w),u||(d[u++]=0),d.length=u,d}}}),Tv=en({"node_modules/robust-orientation/orientation.js"(i,t){var e=oc(),n=sd(),r=od(),s=ad(),o=5,a=11102230246251565e-32,h=(3+16*a)*a,d=(7+56*a)*a;function u(c,S,l,R){return function(x,y,A){var T=c(c(S(y[1],A[0]),S(-A[1],y[0])),c(S(x[1],y[0]),S(-y[1],x[0]))),C=c(S(x[1],A[0]),S(-A[1],x[0])),L=R(T,C);return L[L.length-1]}}function p(c,S,l,R){return function(x,y,A,T){var C=c(c(l(c(S(A[1],T[0]),S(-T[1],A[0])),y[2]),c(l(c(S(y[1],T[0]),S(-T[1],y[0])),-A[2]),l(c(S(y[1],A[0]),S(-A[1],y[0])),T[2]))),c(l(c(S(y[1],T[0]),S(-T[1],y[0])),x[2]),c(l(c(S(x[1],T[0]),S(-T[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),T[2])))),L=c(c(l(c(S(A[1],T[0]),S(-T[1],A[0])),x[2]),c(l(c(S(x[1],T[0]),S(-T[1],x[0])),-A[2]),l(c(S(x[1],A[0]),S(-A[1],x[0])),T[2]))),c(l(c(S(y[1],A[0]),S(-A[1],y[0])),x[2]),c(l(c(S(x[1],A[0]),S(-A[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),A[2])))),N=R(C,L);return N[N.length-1]}}function g(c,S,l,R){return function(x,y,A,T,C){var L=c(c(c(l(c(l(c(S(T[1],C[0]),S(-C[1],T[0])),A[2]),c(l(c(S(A[1],C[0]),S(-C[1],A[0])),-T[2]),l(c(S(A[1],T[0]),S(-T[1],A[0])),C[2]))),y[3]),c(l(c(l(c(S(T[1],C[0]),S(-C[1],T[0])),y[2]),c(l(c(S(y[1],C[0]),S(-C[1],y[0])),-T[2]),l(c(S(y[1],T[0]),S(-T[1],y[0])),C[2]))),-A[3]),l(c(l(c(S(A[1],C[0]),S(-C[1],A[0])),y[2]),c(l(c(S(y[1],C[0]),S(-C[1],y[0])),-A[2]),l(c(S(y[1],A[0]),S(-A[1],y[0])),C[2]))),T[3]))),c(l(c(l(c(S(A[1],T[0]),S(-T[1],A[0])),y[2]),c(l(c(S(y[1],T[0]),S(-T[1],y[0])),-A[2]),l(c(S(y[1],A[0]),S(-A[1],y[0])),T[2]))),-C[3]),c(l(c(l(c(S(T[1],C[0]),S(-C[1],T[0])),y[2]),c(l(c(S(y[1],C[0]),S(-C[1],y[0])),-T[2]),l(c(S(y[1],T[0]),S(-T[1],y[0])),C[2]))),x[3]),l(c(l(c(S(T[1],C[0]),S(-C[1],T[0])),x[2]),c(l(c(S(x[1],C[0]),S(-C[1],x[0])),-T[2]),l(c(S(x[1],T[0]),S(-T[1],x[0])),C[2]))),-y[3])))),c(c(l(c(l(c(S(y[1],C[0]),S(-C[1],y[0])),x[2]),c(l(c(S(x[1],C[0]),S(-C[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),C[2]))),T[3]),c(l(c(l(c(S(y[1],T[0]),S(-T[1],y[0])),x[2]),c(l(c(S(x[1],T[0]),S(-T[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),T[2]))),-C[3]),l(c(l(c(S(A[1],T[0]),S(-T[1],A[0])),y[2]),c(l(c(S(y[1],T[0]),S(-T[1],y[0])),-A[2]),l(c(S(y[1],A[0]),S(-A[1],y[0])),T[2]))),x[3]))),c(l(c(l(c(S(A[1],T[0]),S(-T[1],A[0])),x[2]),c(l(c(S(x[1],T[0]),S(-T[1],x[0])),-A[2]),l(c(S(x[1],A[0]),S(-A[1],x[0])),T[2]))),-y[3]),c(l(c(l(c(S(y[1],T[0]),S(-T[1],y[0])),x[2]),c(l(c(S(x[1],T[0]),S(-T[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),T[2]))),A[3]),l(c(l(c(S(y[1],A[0]),S(-A[1],y[0])),x[2]),c(l(c(S(x[1],A[0]),S(-A[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),A[2]))),-T[3]))))),N=c(c(c(l(c(l(c(S(T[1],C[0]),S(-C[1],T[0])),A[2]),c(l(c(S(A[1],C[0]),S(-C[1],A[0])),-T[2]),l(c(S(A[1],T[0]),S(-T[1],A[0])),C[2]))),x[3]),l(c(l(c(S(T[1],C[0]),S(-C[1],T[0])),x[2]),c(l(c(S(x[1],C[0]),S(-C[1],x[0])),-T[2]),l(c(S(x[1],T[0]),S(-T[1],x[0])),C[2]))),-A[3])),c(l(c(l(c(S(A[1],C[0]),S(-C[1],A[0])),x[2]),c(l(c(S(x[1],C[0]),S(-C[1],x[0])),-A[2]),l(c(S(x[1],A[0]),S(-A[1],x[0])),C[2]))),T[3]),l(c(l(c(S(A[1],T[0]),S(-T[1],A[0])),x[2]),c(l(c(S(x[1],T[0]),S(-T[1],x[0])),-A[2]),l(c(S(x[1],A[0]),S(-A[1],x[0])),T[2]))),-C[3]))),c(c(l(c(l(c(S(A[1],C[0]),S(-C[1],A[0])),y[2]),c(l(c(S(y[1],C[0]),S(-C[1],y[0])),-A[2]),l(c(S(y[1],A[0]),S(-A[1],y[0])),C[2]))),x[3]),l(c(l(c(S(A[1],C[0]),S(-C[1],A[0])),x[2]),c(l(c(S(x[1],C[0]),S(-C[1],x[0])),-A[2]),l(c(S(x[1],A[0]),S(-A[1],x[0])),C[2]))),-y[3])),c(l(c(l(c(S(y[1],C[0]),S(-C[1],y[0])),x[2]),c(l(c(S(x[1],C[0]),S(-C[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),C[2]))),A[3]),l(c(l(c(S(y[1],A[0]),S(-A[1],y[0])),x[2]),c(l(c(S(x[1],A[0]),S(-A[1],x[0])),-y[2]),l(c(S(x[1],y[0]),S(-y[1],x[0])),A[2]))),-C[3])))),O=R(L,N);return O[O.length-1]}}function m(c){var S=c===3?u:c===4?p:g;return S(n,e,r,s)}var M=m(3),E=m(4),v=[function(){return 0},function(){return 0},function(S,l){return l[0]-S[0]},function(S,l,R){var w=(S[1]-R[1])*(l[0]-R[0]),x=(S[0]-R[0])*(l[1]-R[1]),y=w-x,A;if(w>0){if(x<=0)return y;A=w+x}else if(w<0){if(x>=0)return y;A=-(w+x)}else return y;var T=h*A;return y>=T||y<=-T?y:M(S,l,R)},function(S,l,R,w){var x=S[0]-w[0],y=l[0]-w[0],A=R[0]-w[0],T=S[1]-w[1],C=l[1]-w[1],L=R[1]-w[1],N=S[2]-w[2],O=l[2]-w[2],F=R[2]-w[2],k=y*L,Z=A*C,Q=A*T,J=x*L,st=x*C,ht=y*T,yt=N*(k-Z)+O*(Q-J)+F*(st-ht),vt=(Math.abs(k)+Math.abs(Z))*Math.abs(N)+(Math.abs(Q)+Math.abs(J))*Math.abs(O)+(Math.abs(st)+Math.abs(ht))*Math.abs(F),q=d*vt;return yt>q||-yt>q?yt:E(S,l,R,w)}];function _(c){var S=v[c.length];return S||(S=v[c.length]=m(c.length)),S.apply(void 0,c)}function b(c,S,l,R,w,x,y){return function(T,C,L,N,O){switch(arguments.length){case 0:case 1:return 0;case 2:return R(T,C);case 3:return w(T,C,L);case 4:return x(T,C,L,N);case 5:return y(T,C,L,N,O)}for(var F=new Array(arguments.length),k=0;k<arguments.length;++k)F[k]=arguments[k];return c(F)}}function f(){for(;v.length<=o;)v.push(m(v.length));t.exports=b.apply(void 0,[_].concat(v));for(var c=0;c<=o;++c)t.exports[c]=v[c]}f()}}),wv=en({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=Ro(),n=Tv()[3],r=0,s=1,o=2;t.exports=E;function a(v,_,b,f,c){this.a=v,this.b=_,this.idx=b,this.lowerIds=f,this.upperIds=c}function h(v,_,b,f){this.a=v,this.b=_,this.type=b,this.idx=f}function d(v,_){var b=v.a[0]-_.a[0]||v.a[1]-_.a[1]||v.type-_.type;return b||v.type!==r&&(b=n(v.a,v.b,_.b),b)?b:v.idx-_.idx}function u(v,_){return n(v.a,v.b,_)}function p(v,_,b,f,c){for(var S=e.lt(_,f,u),l=e.gt(_,f,u),R=S;R<l;++R){for(var w=_[R],x=w.lowerIds,A=x.length;A>1&&n(b[x[A-2]],b[x[A-1]],f)>0;)v.push([x[A-1],x[A-2],c]),A-=1;x.length=A,x.push(c);for(var y=w.upperIds,A=y.length;A>1&&n(b[y[A-2]],b[y[A-1]],f)<0;)v.push([y[A-2],y[A-1],c]),A-=1;y.length=A,y.push(c)}}function g(v,_){var b;return v.a[0]<_.a[0]?b=n(v.a,v.b,_.a):b=n(_.b,_.a,v.a),b||(_.b[0]<v.b[0]?b=n(v.a,v.b,_.b):b=n(_.b,_.a,v.b),b||v.idx-_.idx)}function m(v,_,b){var f=e.le(v,b,g),c=v[f],S=c.upperIds,l=S[S.length-1];c.upperIds=[l],v.splice(f+1,0,new a(b.a,b.b,b.idx,[l],S))}function M(v,_,b){var f=b.a;b.a=b.b,b.b=f;var c=e.eq(v,b,g),S=v[c],l=v[c-1];l.upperIds=S.upperIds,v.splice(c,1)}function E(v,_){for(var b=v.length,f=_.length,c=[],S=0;S<b;++S)c.push(new h(v[S],null,r,S));for(var S=0;S<f;++S){var l=_[S],R=v[l[0]],w=v[l[1]];R[0]<w[0]?c.push(new h(R,w,o,S),new h(w,R,s,S)):R[0]>w[0]&&c.push(new h(w,R,o,S),new h(R,w,s,S))}c.sort(d);for(var x=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),y=[new a([x,1],[x,0],-1,[],[])],A=[],S=0,T=c.length;S<T;++S){var C=c[S],L=C.type;L===r?p(A,y,v,C.a,C.idx):L===o?m(y,v,C):M(y,v,C)}return A}}}),Cv=en({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=Ro();t.exports=o;function n(a,h){this.stars=a,this.edges=h}var r=n.prototype;function s(a,h,d){for(var u=1,p=a.length;u<p;u+=2)if(a[u-1]===h&&a[u]===d){a[u-1]=a[p-2],a[u]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function h(d,u){return d[0]-u[0]||d[1]-u[1]}return function(d,u){return a[0]=Math.min(d,u),a[1]=Math.max(d,u),e.eq(this.edges,a,h)>=0}})(),r.removeTriangle=function(a,h,d){var u=this.stars;s(u[a],h,d),s(u[h],d,a),s(u[d],a,h)},r.addTriangle=function(a,h,d){var u=this.stars;u[a].push(h,d),u[h].push(d,a),u[d].push(a,h)},r.opposite=function(a,h){for(var d=this.stars[h],u=1,p=d.length;u<p;u+=2)if(d[u]===a)return d[u-1];return-1},r.flip=function(a,h){var d=this.opposite(a,h),u=this.opposite(h,a);this.removeTriangle(a,h,d),this.removeTriangle(h,a,u),this.addTriangle(a,u,d),this.addTriangle(h,d,u)},r.edges=function(){for(var a=this.stars,h=[],d=0,u=a.length;d<u;++d)for(var p=a[d],g=0,m=p.length;g<m;g+=2)h.push([p[g],p[g+1]]);return h},r.cells=function(){for(var a=this.stars,h=[],d=0,u=a.length;d<u;++d)for(var p=a[d],g=0,m=p.length;g<m;g+=2){var M=p[g],E=p[g+1];d<Math.min(M,E)&&h.push([d,M,E])}return h};function o(a,h){for(var d=new Array(a),u=0;u<a;++u)d[u]=[];return new n(d,h)}}}),Rv=en({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=oc(),n=sd(),r=ad(),s=od(),o=6;function a(f){var c=f===3?p:f===4?g:f===5?m:M;return c(n,r,e,s)}function h(){return 0}function d(){return 0}function u(){return 0}function p(f,c,S,l){function R(w,x,y){var A=S(w[0],w[0]),T=l(A,x[0]),C=l(A,y[0]),L=S(x[0],x[0]),N=l(L,w[0]),O=l(L,y[0]),F=S(y[0],y[0]),k=l(F,w[0]),Z=l(F,x[0]),Q=f(c(Z,O),c(N,T)),J=c(k,C),st=c(Q,J);return st[st.length-1]}return R}function g(f,c,S,l){function R(w,x,y,A){var T=f(S(w[0],w[0]),S(w[1],w[1])),C=l(T,x[0]),L=l(T,y[0]),N=l(T,A[0]),O=f(S(x[0],x[0]),S(x[1],x[1])),F=l(O,w[0]),k=l(O,y[0]),Z=l(O,A[0]),Q=f(S(y[0],y[0]),S(y[1],y[1])),J=l(Q,w[0]),st=l(Q,x[0]),ht=l(Q,A[0]),yt=f(S(A[0],A[0]),S(A[1],A[1])),vt=l(yt,w[0]),q=l(yt,x[0]),K=l(yt,y[0]),et=f(f(l(c(K,ht),x[1]),f(l(c(q,Z),-y[1]),l(c(st,k),A[1]))),f(l(c(q,Z),w[1]),f(l(c(vt,N),-x[1]),l(c(F,C),A[1])))),at=f(f(l(c(K,ht),w[1]),f(l(c(vt,N),-y[1]),l(c(J,L),A[1]))),f(l(c(st,k),w[1]),f(l(c(J,L),-x[1]),l(c(F,C),y[1])))),nt=c(et,at);return nt[nt.length-1]}return R}function m(f,c,S,l){function R(w,x,y,A,T){var C=f(S(w[0],w[0]),f(S(w[1],w[1]),S(w[2],w[2]))),L=l(C,x[0]),N=l(C,y[0]),O=l(C,A[0]),F=l(C,T[0]),k=f(S(x[0],x[0]),f(S(x[1],x[1]),S(x[2],x[2]))),Z=l(k,w[0]),Q=l(k,y[0]),J=l(k,A[0]),st=l(k,T[0]),ht=f(S(y[0],y[0]),f(S(y[1],y[1]),S(y[2],y[2]))),yt=l(ht,w[0]),vt=l(ht,x[0]),q=l(ht,A[0]),K=l(ht,T[0]),et=f(S(A[0],A[0]),f(S(A[1],A[1]),S(A[2],A[2]))),at=l(et,w[0]),nt=l(et,x[0]),Et=l(et,y[0]),Kt=l(et,T[0]),At=f(S(T[0],T[0]),f(S(T[1],T[1]),S(T[2],T[2]))),Rt=l(At,w[0]),Pt=l(At,x[0]),St=l(At,y[0]),Ut=l(At,A[0]),B=f(f(f(l(f(l(c(Ut,Kt),y[1]),f(l(c(St,K),-A[1]),l(c(Et,q),T[1]))),x[2]),f(l(f(l(c(Ut,Kt),x[1]),f(l(c(Pt,st),-A[1]),l(c(nt,J),T[1]))),-y[2]),l(f(l(c(St,K),x[1]),f(l(c(Pt,st),-y[1]),l(c(vt,Q),T[1]))),A[2]))),f(l(f(l(c(Et,q),x[1]),f(l(c(nt,J),-y[1]),l(c(vt,Q),A[1]))),-T[2]),f(l(f(l(c(Ut,Kt),x[1]),f(l(c(Pt,st),-A[1]),l(c(nt,J),T[1]))),w[2]),l(f(l(c(Ut,Kt),w[1]),f(l(c(Rt,F),-A[1]),l(c(at,O),T[1]))),-x[2])))),f(f(l(f(l(c(Pt,st),w[1]),f(l(c(Rt,F),-x[1]),l(c(Z,L),T[1]))),A[2]),f(l(f(l(c(nt,J),w[1]),f(l(c(at,O),-x[1]),l(c(Z,L),A[1]))),-T[2]),l(f(l(c(Et,q),x[1]),f(l(c(nt,J),-y[1]),l(c(vt,Q),A[1]))),w[2]))),f(l(f(l(c(Et,q),w[1]),f(l(c(at,O),-y[1]),l(c(yt,N),A[1]))),-x[2]),f(l(f(l(c(nt,J),w[1]),f(l(c(at,O),-x[1]),l(c(Z,L),A[1]))),y[2]),l(f(l(c(vt,Q),w[1]),f(l(c(yt,N),-x[1]),l(c(Z,L),y[1]))),-A[2]))))),Ht=f(f(f(l(f(l(c(Ut,Kt),y[1]),f(l(c(St,K),-A[1]),l(c(Et,q),T[1]))),w[2]),l(f(l(c(Ut,Kt),w[1]),f(l(c(Rt,F),-A[1]),l(c(at,O),T[1]))),-y[2])),f(l(f(l(c(St,K),w[1]),f(l(c(Rt,F),-y[1]),l(c(yt,N),T[1]))),A[2]),l(f(l(c(Et,q),w[1]),f(l(c(at,O),-y[1]),l(c(yt,N),A[1]))),-T[2]))),f(f(l(f(l(c(St,K),x[1]),f(l(c(Pt,st),-y[1]),l(c(vt,Q),T[1]))),w[2]),l(f(l(c(St,K),w[1]),f(l(c(Rt,F),-y[1]),l(c(yt,N),T[1]))),-x[2])),f(l(f(l(c(Pt,st),w[1]),f(l(c(Rt,F),-x[1]),l(c(Z,L),T[1]))),y[2]),l(f(l(c(vt,Q),w[1]),f(l(c(yt,N),-x[1]),l(c(Z,L),y[1]))),-T[2])))),It=c(B,Ht);return It[It.length-1]}return R}function M(f,c,S,l){function R(w,x,y,A,T,C){var L=f(f(S(w[0],w[0]),S(w[1],w[1])),f(S(w[2],w[2]),S(w[3],w[3]))),N=l(L,x[0]),O=l(L,y[0]),F=l(L,A[0]),k=l(L,T[0]),Z=l(L,C[0]),Q=f(f(S(x[0],x[0]),S(x[1],x[1])),f(S(x[2],x[2]),S(x[3],x[3]))),J=l(Q,w[0]),st=l(Q,y[0]),ht=l(Q,A[0]),yt=l(Q,T[0]),vt=l(Q,C[0]),q=f(f(S(y[0],y[0]),S(y[1],y[1])),f(S(y[2],y[2]),S(y[3],y[3]))),K=l(q,w[0]),et=l(q,x[0]),at=l(q,A[0]),nt=l(q,T[0]),Et=l(q,C[0]),Kt=f(f(S(A[0],A[0]),S(A[1],A[1])),f(S(A[2],A[2]),S(A[3],A[3]))),At=l(Kt,w[0]),Rt=l(Kt,x[0]),Pt=l(Kt,y[0]),St=l(Kt,T[0]),Ut=l(Kt,C[0]),B=f(f(S(T[0],T[0]),S(T[1],T[1])),f(S(T[2],T[2]),S(T[3],T[3]))),Ht=l(B,w[0]),It=l(B,x[0]),Ot=l(B,y[0]),lt=l(B,A[0]),I=l(B,C[0]),P=f(f(S(C[0],C[0]),S(C[1],C[1])),f(S(C[2],C[2]),S(C[3],C[3]))),z=l(P,w[0]),X=l(P,x[0]),j=l(P,y[0]),W=l(P,A[0]),ct=l(P,T[0]),ut=f(f(f(l(f(f(l(f(l(c(ct,I),A[1]),f(l(c(W,Ut),-T[1]),l(c(lt,St),C[1]))),y[2]),l(f(l(c(ct,I),y[1]),f(l(c(j,Et),-T[1]),l(c(Ot,nt),C[1]))),-A[2])),f(l(f(l(c(W,Ut),y[1]),f(l(c(j,Et),-A[1]),l(c(Pt,at),C[1]))),T[2]),l(f(l(c(lt,St),y[1]),f(l(c(Ot,nt),-A[1]),l(c(Pt,at),T[1]))),-C[2]))),x[3]),f(l(f(f(l(f(l(c(ct,I),A[1]),f(l(c(W,Ut),-T[1]),l(c(lt,St),C[1]))),x[2]),l(f(l(c(ct,I),x[1]),f(l(c(X,vt),-T[1]),l(c(It,yt),C[1]))),-A[2])),f(l(f(l(c(W,Ut),x[1]),f(l(c(X,vt),-A[1]),l(c(Rt,ht),C[1]))),T[2]),l(f(l(c(lt,St),x[1]),f(l(c(It,yt),-A[1]),l(c(Rt,ht),T[1]))),-C[2]))),-y[3]),l(f(f(l(f(l(c(ct,I),y[1]),f(l(c(j,Et),-T[1]),l(c(Ot,nt),C[1]))),x[2]),l(f(l(c(ct,I),x[1]),f(l(c(X,vt),-T[1]),l(c(It,yt),C[1]))),-y[2])),f(l(f(l(c(j,Et),x[1]),f(l(c(X,vt),-y[1]),l(c(et,st),C[1]))),T[2]),l(f(l(c(Ot,nt),x[1]),f(l(c(It,yt),-y[1]),l(c(et,st),T[1]))),-C[2]))),A[3]))),f(f(l(f(f(l(f(l(c(W,Ut),y[1]),f(l(c(j,Et),-A[1]),l(c(Pt,at),C[1]))),x[2]),l(f(l(c(W,Ut),x[1]),f(l(c(X,vt),-A[1]),l(c(Rt,ht),C[1]))),-y[2])),f(l(f(l(c(j,Et),x[1]),f(l(c(X,vt),-y[1]),l(c(et,st),C[1]))),A[2]),l(f(l(c(Pt,at),x[1]),f(l(c(Rt,ht),-y[1]),l(c(et,st),A[1]))),-C[2]))),-T[3]),l(f(f(l(f(l(c(lt,St),y[1]),f(l(c(Ot,nt),-A[1]),l(c(Pt,at),T[1]))),x[2]),l(f(l(c(lt,St),x[1]),f(l(c(It,yt),-A[1]),l(c(Rt,ht),T[1]))),-y[2])),f(l(f(l(c(Ot,nt),x[1]),f(l(c(It,yt),-y[1]),l(c(et,st),T[1]))),A[2]),l(f(l(c(Pt,at),x[1]),f(l(c(Rt,ht),-y[1]),l(c(et,st),A[1]))),-T[2]))),C[3])),f(l(f(f(l(f(l(c(ct,I),A[1]),f(l(c(W,Ut),-T[1]),l(c(lt,St),C[1]))),x[2]),l(f(l(c(ct,I),x[1]),f(l(c(X,vt),-T[1]),l(c(It,yt),C[1]))),-A[2])),f(l(f(l(c(W,Ut),x[1]),f(l(c(X,vt),-A[1]),l(c(Rt,ht),C[1]))),T[2]),l(f(l(c(lt,St),x[1]),f(l(c(It,yt),-A[1]),l(c(Rt,ht),T[1]))),-C[2]))),w[3]),l(f(f(l(f(l(c(ct,I),A[1]),f(l(c(W,Ut),-T[1]),l(c(lt,St),C[1]))),w[2]),l(f(l(c(ct,I),w[1]),f(l(c(z,Z),-T[1]),l(c(Ht,k),C[1]))),-A[2])),f(l(f(l(c(W,Ut),w[1]),f(l(c(z,Z),-A[1]),l(c(At,F),C[1]))),T[2]),l(f(l(c(lt,St),w[1]),f(l(c(Ht,k),-A[1]),l(c(At,F),T[1]))),-C[2]))),-x[3])))),f(f(f(l(f(f(l(f(l(c(ct,I),x[1]),f(l(c(X,vt),-T[1]),l(c(It,yt),C[1]))),w[2]),l(f(l(c(ct,I),w[1]),f(l(c(z,Z),-T[1]),l(c(Ht,k),C[1]))),-x[2])),f(l(f(l(c(X,vt),w[1]),f(l(c(z,Z),-x[1]),l(c(J,N),C[1]))),T[2]),l(f(l(c(It,yt),w[1]),f(l(c(Ht,k),-x[1]),l(c(J,N),T[1]))),-C[2]))),A[3]),l(f(f(l(f(l(c(W,Ut),x[1]),f(l(c(X,vt),-A[1]),l(c(Rt,ht),C[1]))),w[2]),l(f(l(c(W,Ut),w[1]),f(l(c(z,Z),-A[1]),l(c(At,F),C[1]))),-x[2])),f(l(f(l(c(X,vt),w[1]),f(l(c(z,Z),-x[1]),l(c(J,N),C[1]))),A[2]),l(f(l(c(Rt,ht),w[1]),f(l(c(At,F),-x[1]),l(c(J,N),A[1]))),-C[2]))),-T[3])),f(l(f(f(l(f(l(c(lt,St),x[1]),f(l(c(It,yt),-A[1]),l(c(Rt,ht),T[1]))),w[2]),l(f(l(c(lt,St),w[1]),f(l(c(Ht,k),-A[1]),l(c(At,F),T[1]))),-x[2])),f(l(f(l(c(It,yt),w[1]),f(l(c(Ht,k),-x[1]),l(c(J,N),T[1]))),A[2]),l(f(l(c(Rt,ht),w[1]),f(l(c(At,F),-x[1]),l(c(J,N),A[1]))),-T[2]))),C[3]),l(f(f(l(f(l(c(W,Ut),y[1]),f(l(c(j,Et),-A[1]),l(c(Pt,at),C[1]))),x[2]),l(f(l(c(W,Ut),x[1]),f(l(c(X,vt),-A[1]),l(c(Rt,ht),C[1]))),-y[2])),f(l(f(l(c(j,Et),x[1]),f(l(c(X,vt),-y[1]),l(c(et,st),C[1]))),A[2]),l(f(l(c(Pt,at),x[1]),f(l(c(Rt,ht),-y[1]),l(c(et,st),A[1]))),-C[2]))),w[3]))),f(f(l(f(f(l(f(l(c(W,Ut),y[1]),f(l(c(j,Et),-A[1]),l(c(Pt,at),C[1]))),w[2]),l(f(l(c(W,Ut),w[1]),f(l(c(z,Z),-A[1]),l(c(At,F),C[1]))),-y[2])),f(l(f(l(c(j,Et),w[1]),f(l(c(z,Z),-y[1]),l(c(K,O),C[1]))),A[2]),l(f(l(c(Pt,at),w[1]),f(l(c(At,F),-y[1]),l(c(K,O),A[1]))),-C[2]))),-x[3]),l(f(f(l(f(l(c(W,Ut),x[1]),f(l(c(X,vt),-A[1]),l(c(Rt,ht),C[1]))),w[2]),l(f(l(c(W,Ut),w[1]),f(l(c(z,Z),-A[1]),l(c(At,F),C[1]))),-x[2])),f(l(f(l(c(X,vt),w[1]),f(l(c(z,Z),-x[1]),l(c(J,N),C[1]))),A[2]),l(f(l(c(Rt,ht),w[1]),f(l(c(At,F),-x[1]),l(c(J,N),A[1]))),-C[2]))),y[3])),f(l(f(f(l(f(l(c(j,Et),x[1]),f(l(c(X,vt),-y[1]),l(c(et,st),C[1]))),w[2]),l(f(l(c(j,Et),w[1]),f(l(c(z,Z),-y[1]),l(c(K,O),C[1]))),-x[2])),f(l(f(l(c(X,vt),w[1]),f(l(c(z,Z),-x[1]),l(c(J,N),C[1]))),y[2]),l(f(l(c(et,st),w[1]),f(l(c(K,O),-x[1]),l(c(J,N),y[1]))),-C[2]))),-A[3]),l(f(f(l(f(l(c(Pt,at),x[1]),f(l(c(Rt,ht),-y[1]),l(c(et,st),A[1]))),w[2]),l(f(l(c(Pt,at),w[1]),f(l(c(At,F),-y[1]),l(c(K,O),A[1]))),-x[2])),f(l(f(l(c(Rt,ht),w[1]),f(l(c(At,F),-x[1]),l(c(J,N),A[1]))),y[2]),l(f(l(c(et,st),w[1]),f(l(c(K,O),-x[1]),l(c(J,N),y[1]))),-A[2]))),C[3]))))),wt=f(f(f(l(f(f(l(f(l(c(ct,I),A[1]),f(l(c(W,Ut),-T[1]),l(c(lt,St),C[1]))),y[2]),l(f(l(c(ct,I),y[1]),f(l(c(j,Et),-T[1]),l(c(Ot,nt),C[1]))),-A[2])),f(l(f(l(c(W,Ut),y[1]),f(l(c(j,Et),-A[1]),l(c(Pt,at),C[1]))),T[2]),l(f(l(c(lt,St),y[1]),f(l(c(Ot,nt),-A[1]),l(c(Pt,at),T[1]))),-C[2]))),w[3]),f(l(f(f(l(f(l(c(ct,I),A[1]),f(l(c(W,Ut),-T[1]),l(c(lt,St),C[1]))),w[2]),l(f(l(c(ct,I),w[1]),f(l(c(z,Z),-T[1]),l(c(Ht,k),C[1]))),-A[2])),f(l(f(l(c(W,Ut),w[1]),f(l(c(z,Z),-A[1]),l(c(At,F),C[1]))),T[2]),l(f(l(c(lt,St),w[1]),f(l(c(Ht,k),-A[1]),l(c(At,F),T[1]))),-C[2]))),-y[3]),l(f(f(l(f(l(c(ct,I),y[1]),f(l(c(j,Et),-T[1]),l(c(Ot,nt),C[1]))),w[2]),l(f(l(c(ct,I),w[1]),f(l(c(z,Z),-T[1]),l(c(Ht,k),C[1]))),-y[2])),f(l(f(l(c(j,Et),w[1]),f(l(c(z,Z),-y[1]),l(c(K,O),C[1]))),T[2]),l(f(l(c(Ot,nt),w[1]),f(l(c(Ht,k),-y[1]),l(c(K,O),T[1]))),-C[2]))),A[3]))),f(f(l(f(f(l(f(l(c(W,Ut),y[1]),f(l(c(j,Et),-A[1]),l(c(Pt,at),C[1]))),w[2]),l(f(l(c(W,Ut),w[1]),f(l(c(z,Z),-A[1]),l(c(At,F),C[1]))),-y[2])),f(l(f(l(c(j,Et),w[1]),f(l(c(z,Z),-y[1]),l(c(K,O),C[1]))),A[2]),l(f(l(c(Pt,at),w[1]),f(l(c(At,F),-y[1]),l(c(K,O),A[1]))),-C[2]))),-T[3]),l(f(f(l(f(l(c(lt,St),y[1]),f(l(c(Ot,nt),-A[1]),l(c(Pt,at),T[1]))),w[2]),l(f(l(c(lt,St),w[1]),f(l(c(Ht,k),-A[1]),l(c(At,F),T[1]))),-y[2])),f(l(f(l(c(Ot,nt),w[1]),f(l(c(Ht,k),-y[1]),l(c(K,O),T[1]))),A[2]),l(f(l(c(Pt,at),w[1]),f(l(c(At,F),-y[1]),l(c(K,O),A[1]))),-T[2]))),C[3])),f(l(f(f(l(f(l(c(ct,I),y[1]),f(l(c(j,Et),-T[1]),l(c(Ot,nt),C[1]))),x[2]),l(f(l(c(ct,I),x[1]),f(l(c(X,vt),-T[1]),l(c(It,yt),C[1]))),-y[2])),f(l(f(l(c(j,Et),x[1]),f(l(c(X,vt),-y[1]),l(c(et,st),C[1]))),T[2]),l(f(l(c(Ot,nt),x[1]),f(l(c(It,yt),-y[1]),l(c(et,st),T[1]))),-C[2]))),w[3]),l(f(f(l(f(l(c(ct,I),y[1]),f(l(c(j,Et),-T[1]),l(c(Ot,nt),C[1]))),w[2]),l(f(l(c(ct,I),w[1]),f(l(c(z,Z),-T[1]),l(c(Ht,k),C[1]))),-y[2])),f(l(f(l(c(j,Et),w[1]),f(l(c(z,Z),-y[1]),l(c(K,O),C[1]))),T[2]),l(f(l(c(Ot,nt),w[1]),f(l(c(Ht,k),-y[1]),l(c(K,O),T[1]))),-C[2]))),-x[3])))),f(f(f(l(f(f(l(f(l(c(ct,I),x[1]),f(l(c(X,vt),-T[1]),l(c(It,yt),C[1]))),w[2]),l(f(l(c(ct,I),w[1]),f(l(c(z,Z),-T[1]),l(c(Ht,k),C[1]))),-x[2])),f(l(f(l(c(X,vt),w[1]),f(l(c(z,Z),-x[1]),l(c(J,N),C[1]))),T[2]),l(f(l(c(It,yt),w[1]),f(l(c(Ht,k),-x[1]),l(c(J,N),T[1]))),-C[2]))),y[3]),l(f(f(l(f(l(c(j,Et),x[1]),f(l(c(X,vt),-y[1]),l(c(et,st),C[1]))),w[2]),l(f(l(c(j,Et),w[1]),f(l(c(z,Z),-y[1]),l(c(K,O),C[1]))),-x[2])),f(l(f(l(c(X,vt),w[1]),f(l(c(z,Z),-x[1]),l(c(J,N),C[1]))),y[2]),l(f(l(c(et,st),w[1]),f(l(c(K,O),-x[1]),l(c(J,N),y[1]))),-C[2]))),-T[3])),f(l(f(f(l(f(l(c(Ot,nt),x[1]),f(l(c(It,yt),-y[1]),l(c(et,st),T[1]))),w[2]),l(f(l(c(Ot,nt),w[1]),f(l(c(Ht,k),-y[1]),l(c(K,O),T[1]))),-x[2])),f(l(f(l(c(It,yt),w[1]),f(l(c(Ht,k),-x[1]),l(c(J,N),T[1]))),y[2]),l(f(l(c(et,st),w[1]),f(l(c(K,O),-x[1]),l(c(J,N),y[1]))),-T[2]))),C[3]),l(f(f(l(f(l(c(lt,St),y[1]),f(l(c(Ot,nt),-A[1]),l(c(Pt,at),T[1]))),x[2]),l(f(l(c(lt,St),x[1]),f(l(c(It,yt),-A[1]),l(c(Rt,ht),T[1]))),-y[2])),f(l(f(l(c(Ot,nt),x[1]),f(l(c(It,yt),-y[1]),l(c(et,st),T[1]))),A[2]),l(f(l(c(Pt,at),x[1]),f(l(c(Rt,ht),-y[1]),l(c(et,st),A[1]))),-T[2]))),w[3]))),f(f(l(f(f(l(f(l(c(lt,St),y[1]),f(l(c(Ot,nt),-A[1]),l(c(Pt,at),T[1]))),w[2]),l(f(l(c(lt,St),w[1]),f(l(c(Ht,k),-A[1]),l(c(At,F),T[1]))),-y[2])),f(l(f(l(c(Ot,nt),w[1]),f(l(c(Ht,k),-y[1]),l(c(K,O),T[1]))),A[2]),l(f(l(c(Pt,at),w[1]),f(l(c(At,F),-y[1]),l(c(K,O),A[1]))),-T[2]))),-x[3]),l(f(f(l(f(l(c(lt,St),x[1]),f(l(c(It,yt),-A[1]),l(c(Rt,ht),T[1]))),w[2]),l(f(l(c(lt,St),w[1]),f(l(c(Ht,k),-A[1]),l(c(At,F),T[1]))),-x[2])),f(l(f(l(c(It,yt),w[1]),f(l(c(Ht,k),-x[1]),l(c(J,N),T[1]))),A[2]),l(f(l(c(Rt,ht),w[1]),f(l(c(At,F),-x[1]),l(c(J,N),A[1]))),-T[2]))),y[3])),f(l(f(f(l(f(l(c(Ot,nt),x[1]),f(l(c(It,yt),-y[1]),l(c(et,st),T[1]))),w[2]),l(f(l(c(Ot,nt),w[1]),f(l(c(Ht,k),-y[1]),l(c(K,O),T[1]))),-x[2])),f(l(f(l(c(It,yt),w[1]),f(l(c(Ht,k),-x[1]),l(c(J,N),T[1]))),y[2]),l(f(l(c(et,st),w[1]),f(l(c(K,O),-x[1]),l(c(J,N),y[1]))),-T[2]))),-A[3]),l(f(f(l(f(l(c(Pt,at),x[1]),f(l(c(Rt,ht),-y[1]),l(c(et,st),A[1]))),w[2]),l(f(l(c(Pt,at),w[1]),f(l(c(At,F),-y[1]),l(c(K,O),A[1]))),-x[2])),f(l(f(l(c(Rt,ht),w[1]),f(l(c(At,F),-x[1]),l(c(J,N),A[1]))),y[2]),l(f(l(c(et,st),w[1]),f(l(c(K,O),-x[1]),l(c(J,N),y[1]))),-A[2]))),T[3]))))),Bt=c(ut,wt);return Bt[Bt.length-1]}return R}var E=[h,d,u];function v(f){var c=E[f.length];return c||(c=E[f.length]=a(f.length)),c.apply(void 0,f)}function _(f,c,S,l,R,w,x,y){function A(T,C,L,N,O,F){switch(arguments.length){case 0:case 1:return 0;case 2:return l(T,C);case 3:return R(T,C,L);case 4:return w(T,C,L,N);case 5:return x(T,C,L,N,O);case 6:return y(T,C,L,N,O,F)}for(var k=new Array(arguments.length),Z=0;Z<arguments.length;++Z)k[Z]=arguments[Z];return f(k)}return A}function b(){for(;E.length<=o;)E.push(a(E.length));t.exports=_.apply(void 0,[v].concat(E));for(var f=0;f<=o;++f)t.exports[f]=E[f]}b()}}),Pv=en({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=Rv()[4];Ro(),t.exports=r;function n(s,o,a,h,d,u){var p=o.opposite(h,d);if(!(p<0)){if(d<h){var g=h;h=d,d=g,g=u,u=p,p=g}o.isConstraint(h,d)||e(s[h],s[d],s[u],s[p])<0&&a.push(h,d)}}function r(s,o){for(var a=[],h=s.length,d=o.stars,u=0;u<h;++u)for(var p=d[u],g=1;g<p.length;g+=2){var m=p[g];if(!(m<u)&&!o.isConstraint(u,m)){for(var M=p[g-1],E=-1,v=1;v<p.length;v+=2)if(p[v-1]===m){E=p[v];break}E<0||e(s[u],s[m],s[M],s[E])<0&&a.push(u,m)}}for(;a.length>0;){for(var m=a.pop(),u=a.pop(),M=-1,E=-1,p=d[u],_=1;_<p.length;_+=2){var b=p[_-1],f=p[_];b===m?E=f:f===m&&(M=b)}M<0||E<0||e(s[u],s[m],s[M],s[E])>=0||(o.flip(u,m),n(s,o,a,M,u,E),n(s,o,a,u,E,M),n(s,o,a,E,m,M),n(s,o,a,m,M,E))}}}}),Dv=en({"node_modules/cdt2d/lib/filter.js"(i,t){var e=Ro();t.exports=h;function n(d,u,p,g,m,M,E){this.cells=d,this.neighbor=u,this.flags=g,this.constraint=p,this.active=m,this.next=M,this.boundary=E}var r=n.prototype;function s(d,u){return d[0]-u[0]||d[1]-u[1]||d[2]-u[2]}r.locate=(function(){var d=[0,0,0];return function(u,p,g){var m=u,M=p,E=g;return p<g?p<u&&(m=p,M=g,E=u):g<u&&(m=g,M=u,E=p),m<0?-1:(d[0]=m,d[1]=M,d[2]=E,e.eq(this.cells,d,s))}})();function o(d,u){for(var p=d.cells(),g=p.length,m=0;m<g;++m){var M=p[m],E=M[0],v=M[1],_=M[2];v<_?v<E&&(M[0]=v,M[1]=_,M[2]=E):_<E&&(M[0]=_,M[1]=E,M[2]=v)}p.sort(s);for(var b=new Array(g),m=0;m<b.length;++m)b[m]=0;var f=[],c=[],S=new Array(3*g),l=new Array(3*g),R=null;u&&(R=[]);for(var w=new n(p,S,l,b,f,c,R),m=0;m<g;++m)for(var M=p[m],x=0;x<3;++x){var E=M[x],v=M[(x+1)%3],y=S[3*m+x]=w.locate(v,E,d.opposite(v,E)),A=l[3*m+x]=d.isConstraint(E,v);y<0&&(A?c.push(m):(f.push(m),b[m]=1),u&&R.push([v,E,-1]))}return w}function a(d,u,p){for(var g=0,m=0;m<d.length;++m)u[m]===p&&(d[g++]=d[m]);return d.length=g,d}function h(d,u,p){var g=o(d,p);if(u===0)return p?g.cells.concat(g.boundary):g.cells;for(var m=1,M=g.active,E=g.next,v=g.flags,_=g.cells,b=g.constraint,f=g.neighbor;M.length>0||E.length>0;){for(;M.length>0;){var c=M.pop();if(v[c]!==-m){v[c]=m,_[c];for(var S=0;S<3;++S){var l=f[3*c+S];l>=0&&v[l]===0&&(b[3*c+S]?E.push(l):(M.push(l),v[l]=m))}}}var R=E;E=M,M=R,E.length=0,m=-m}var w=a(_,v,u);return p?w.concat(g.boundary):w}}}),Iv=en({"node_modules/cdt2d/cdt2d.js"(i,t){var e=wv(),n=Cv(),r=Pv(),s=Dv();t.exports=u;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,g){return p[0]-g[0]||p[1]-g[1]}function h(p){return p.map(o).sort(a)}function d(p,g,m){return g in p?p[g]:m}function u(p,g,m){Array.isArray(g)?(m=m||{},g=g||[]):(m=g||{},g=[]);var M=!!d(m,"delaunay",!0),E=!!d(m,"interior",!0),v=!!d(m,"exterior",!0),_=!!d(m,"infinity",!1);if(!E&&!v||p.length===0)return[];var b=e(p,g);if(M||E!==v||_){for(var f=n(p.length,h(g)),c=0;c<b.length;++c){var S=b[c];f.addTriangle(S[0],S[1],S[2])}return M&&r(p,f),v?E?_?s(f,0,_):f.cells():s(f,1,_):s(f,-1)}else return b}}});const Lv=Iv();class Vi{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Vh=1e-16,Uv=1e-16,Fi=new U,Hh=new U,kh=new Vi(()=>({param:0,index:0})),Nv=new Vi(()=>new U);function Fv(i,t,e,n){kh.clear(),t.length=0,e.length=0;for(let d=0,u=i.length;d<u;d++){const p=i[d];h(p.start),h(p.end)}for(let d=0,u=i.length;d<u;d++){const p=i[d];for(let g=d+1;g<u;g++){const m=i[g];p.distanceSqToLine3(m,Fi,Hh)<Vh*n&&h(Hh)}}const r=[];for(let d=0,u=i.length;d<u;d++){r.length=0;const p=i[d];for(let g=0,m=t.length;g<m;g++){const M=t[g],E=p.closestPointToPointParameter(M,!0);if(p.at(E,Fi),M.distanceToSquared(Fi)<Vh*n){const v=kh.getInstance();v.param=E,v.index=g,r.push(v)}}r.sort(a);for(let g=0,m=r.length-1;g<m;g++){const M=r[g].index,E=r[g+1].index;M!==E&&e.push([M,E])}}const s=new Set;let o=0;for(let d=0,u=e.length;d<u;d++){const p=e[d],g=Math.min(p[0],p[1]),m=Math.max(p[0],p[1]),M=g+","+m;s.has(M)||(s.add(M),e[o++]=p)}e.length=o;function a(d,u){return d.param-u.param}function h(d){for(let u=0;u<t.length;u++){const p=t[u];if(d===p||d.distanceToSquared(p)<Uv*n)return u}return t.push(Nv.getInstance().copy(d)),t.length-1}}class Gh{constructor(){this.trianglePool=new Vi(()=>new Ye),this.linePool=new Vi(()=>new Te),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new U,this.projOrigin=new U,this.projU=new U,this.projV=new U,this.baseTri=new Ye,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:h,projOrigin:d,constrainedEdges:u,linePool:p,baseIndices:g}=this;t.getNormal(s),o.copy(t),o.update(),g[0]=e,g[1]=n,g[2]=r,u.length=0;const m=p.getInstance();m.start.copy(o.a),m.end.copy(o.b);const M=p.getInstance();M.start.copy(o.b),M.end.copy(o.c);const E=p.getInstance();E.start.copy(o.c),E.end.copy(o.a),u.push(m,M,E),d.copy(o.a),a.subVectors(o.b,o.a).normalize(),h.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Fi.subVectors(t,n),e.set(Fi.dot(r),Fi.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:h}=this;t.length=0,e.clear();const d=[];for(let _=0,b=a.length;_<b;_++){const f=a[_],c=s.getInstance();this._to2D(f.start,c.start),this._to2D(f.end,c.end),d.push(c)}let u=0;for(let _=0;_<3;_++){const b=this._to2D(o.points[_],Fi);u=Math.max(u,Math.abs(b.x),Math.abs(b.y))}const p=[],g=[];Fv(d,p,g,u);const m=[];for(let _=0,b=p.length;_<b;_++){const f=p[_];m.push([f.x,f.y])}const M=Lv(m,g,{exterior:!1}),E=new Map;for(let _=0,b=g.length;_<b;_++){const f=g[_];E.set(`${f[0]}_${f[1]}`,-1),E.set(`${f[1]}_${f[0]}`,-1)}const v=`${h[0]}_${h[1]}_${h[2]}_`;for(let _=0,b=M.length;_<b;_++){const f=M[_],[c,S,l]=f,R=e.getInstance();this._from2D(m[c][0],m[c][1],R.a),this._from2D(m[S][0],m[S][1],R.b),this._from2D(m[l][0],m[l][1],R.c),t.push(R);const w=[];n.push(w);const x=[];r.push(x);for(let y=0;y<3;y++){const A=f[y];x.push(A<3?h[A]:v+A);const T=f[(y+1)%3],C=`${A}_${T}`;if(E.has(C)){const L=E.get(C);L!==-1&&(w.push(L),n[L].push(_))}else{const L=`${T}_${A}`;E.set(L,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const Ov=1e-14,wa=new U,Wh=new U,Xh=new U;function di(i,t=Ov){wa.subVectors(i.b,i.a),Wh.subVectors(i.c,i.a),Xh.subVectors(i.b,i.c);const e=wa.angleTo(Wh),n=wa.angleTo(Xh),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const Ca=1e-10,$r=1e-10,zn=new Te,ge=new Te,Vn=new U,$h=new U,qh=new U,Zs=new ln,Ra=new Ye;class Yh{constructor(){this.trianglePool=new Vi(()=>new he),this.triangles=[],this.normal=new U}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Vn).dot(r))>Ca)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const h=n.getInstance();h.copy(a),e.push(h)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],h=r[o];t.getNormal($h).normalize(),Vn.subVectors(h,a).normalize(),qh.crossVectors($h,Vn),Zs.setFromNormalAndCoplanarPoint(qh,a),this.splitByPlane(Zs,t)}}else t.getPlane(Zs),this.splitByPlane(Zs,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;Ra.copy(e),Ra.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!Ra.intersectsTriangle(a,zn,!0))continue;const{a:h,b:d,c:u}=a;let p=0,g=-1,m=!1,M=[],E=[];const v=[h,d,u];for(let _=0;_<3;_++){const b=(_+1)%3;zn.start.copy(v[_]),zn.end.copy(v[b]);const f=t.distanceToPoint(zn.start),c=t.distanceToPoint(zn.end);if(Math.abs(f)<$r&&Math.abs(c)<$r){m=!0;break}if(f>0?M.push(_):E.push(_),Math.abs(f)<$r)continue;let S=!!t.intersectLine(zn,Vn);!S&&Math.abs(c)<$r&&(Vn.copy(zn.end),S=!0),S&&!(Vn.distanceTo(zn.start)<Ca)&&(Vn.distanceTo(zn.end)<Ca&&(g=_),p===0?ge.start.copy(Vn):ge.end.copy(Vn),p++)}if(!m&&p===2&&ge.distance()>$r)if(g!==-1){g=(g+1)%3;let _=0;_===g&&(_=(_+1)%3);let b=_+1;b===g&&(b=(b+1)%3);const f=r.getInstance();f.a.copy(v[b]),f.b.copy(ge.end),f.c.copy(ge.start),di(f)||n.push(f),a.a.copy(v[_]),a.b.copy(ge.start),a.c.copy(ge.end),di(a)&&(n.splice(s,1),s--,o--)}else{const _=M.length>=2?E[0]:M[0];if(_===0){let l=ge.start;ge.start=ge.end,ge.end=l}const b=(_+1)%3,f=(_+2)%3,c=r.getInstance(),S=r.getInstance();v[b].distanceToSquared(ge.start)<v[f].distanceToSquared(ge.end)?(c.a.copy(v[b]),c.b.copy(ge.start),c.c.copy(ge.end),S.a.copy(v[b]),S.b.copy(v[f]),S.c.copy(ge.start)):(c.a.copy(v[f]),c.b.copy(ge.start),c.c.copy(ge.end),S.a.copy(v[b]),S.b.copy(v[f]),S.c.copy(ge.end)),a.a.copy(v[_]),a.b.copy(ge.end),a.c.copy(ge.start),di(c)||n.push(c),di(S)||n.push(S),di(a)&&(n.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class Kh{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const Bv=0,ld=1,zv=2,Vv=3,Hv=4,cd=5,hd=6,Pa=1e-10,kv=1e-15,Gv=1e-10,Wv=1e-10,Zh=new Te,gr=new Te,jh=new U,Jh=new U,Qh=new U,Da=new ln,yr=new U,yo=new U;function Xv(i,t){i.getNormal(yr),t.getNormal(yo);const e=yr.dot(yo);if(Math.abs(1-Math.abs(e))>=Gv)return!1;const n=yr.dot(i.a),r=yr.dot(t.a);return Math.abs(n-r)<Wv}function tu(i,t,e,n){let r=0,s=1;i.delta(jh);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const h=o[a],d=o[(a+1)%3];Jh.subVectors(d,h),Qh.crossVectors(e,Jh),Da.setFromNormalAndCoplanarPoint(Qh,h);const u=Da.distanceToPoint(i.start),p=Da.normal.dot(jh);if(Math.abs(p)<kv){if(u<-Pa)return null;continue}const g=-u/p;if(p>0?r=Math.max(r,g):s=Math.min(s,g),r>s+Pa)return null}return s-r<Pa?null:(i.at(r,n.start),i.at(s,n.end),n)}function eu(i,t,e){let n=0;i.getNormal(yr),t.getNormal(yo);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){gr.start.copy(r[o]),gr.end.copy(r[(o+1)%3]);const a=tu(gr,i,yr,Zh);a!==null&&(n>=e.length&&e.push(new Te),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){gr.start.copy(s[o]),gr.end.copy(s[(o+1)%3]);const a=tu(gr,t,yo,Zh);a!==null&&(n>=e.length&&e.push(new Te),e[n].copy(a),n++)}return n}const mr=new os,nu=new jt,js=new Te,Ia=[],Js=new Vi(()=>new Te),_r=-1,xr=1,uo=-2,fo=2,Zr=0,Ri=1,ac=2;let po=null;function iu(i){po=i}function ud(i,t,e=null){i.getMidpoint(mr.origin),i.getNormal(mr.direction),e&&(mr.origin.applyMatrix4(e),mr.direction.transformDirection(e));const n=t.raycastFirst(mr,_n);return!!(n&&mr.direction.dot(n.face.normal)>0)?_r:xr}function $v(i,t){const e=new Kh,n=new Kh;return Js.clear(),nu.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,nu,{intersectsTriangles(r,s,o,a){if(!di(r)&&!di(s)){const d=(Xv(r,s)?eu(r,s,Ia):0)>2;if(d||r.intersectsTriangle(s,js,!0)){const p=i.geometry.boundsTree.resolveTriangleIndex(o),g=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,g,d),n.add(g,p,d),d){const m=eu(r,s,Ia);for(let M=0;M<m;M++){const E=Js.getInstance().copy(Ia[M]);e.addIntersectionEdge(p,E),n.addIntersectionEdge(g,E)}}else{const m=Js.getInstance().copy(js),M=Js.getInstance().copy(js);e.addIntersectionEdge(p,m),n.addIntersectionEdge(g,M)}po&&(po.addEdge(js),po.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function dd(i,t,e=!1){switch(i){case Bv:if(t===xr||t===fo&&!e)return Ri;break;case ld:if(e){if(t===_r)return Zr}else if(t===xr||t===uo)return Ri;break;case zv:if(e){if(t===xr||t===uo)return Ri}else if(t===_r)return Zr;break;case Hv:if(t===_r)return Zr;if(t===xr)return Ri;break;case Vv:if(t===_r||t===fo&&!e)return Ri;break;case cd:if(!e&&(t===xr||t===uo))return Ri;break;case hd:if(!e&&(t===_r||t===fo))return Ri;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return ac}class qv{constructor(t){this.triangle=new he().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new he().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class ru{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new qv(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const h=n[a].intersects;for(const d in h)r.has(d)||(r.add(d),s.push(h[d]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class Yv{constructor(){this.enabled=!1,this.triangleIntersectsA=new ru,this.triangleIntersectsB=new ru,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),iu(this))}complete(){this.enabled&&iu(null)}}const Qe=new jt,Pi=new jt,Xe=new jt,hi=new Xt,pn=new he,Di=new he,gn=new he,li=new he,Oi=[],Mn=[],Qs=new Set,su=new U,ou=new U,au=new Vi(()=>new he),lu=new U,to=[];function Kv(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:h}=$v(i,t),d=[];let u=null,p;return p=o?0:-1,hu(i,t,a,e,!1,r,p),cu(i,t,a,e,!1,n,r,p),e.findIndex(m=>m!==hd&&m!==cd)!==-1&&(r.forEach(m=>m.clearIndexMap()),p=o?i.geometry.groups.length||1:-1,hu(t,i,h,e,!0,r,p),cu(t,i,h,e,!0,n,r,p)),r.forEach(m=>m.clearIndexMap()),Oi.length=0,{groups:d,materials:u}}function cu(i,t,e,n,r,s,o,a=0){Qe.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Pi.copy(Qe).invert(),r?Xe.copy(Qe):Xe.identity();const h=Xe.determinant()<0;hi.getNormalMatrix(Xe).multiplyScalar(h?-1:1);const d=i.geometry.groupIndices,u=i.geometry.index,p=i.geometry.attributes.position,g=t.geometry.boundsTree,m=t.geometry.index,M=t.geometry.attributes.position,E=e.ids;for(let v=0,_=E.length;v<_;v++){const b=E[v],f=a===-1?0:d[b]+a,c=3*b;let S=c+0,l=c+1,R=c+2;u&&(S=u.getX(S),l=u.getX(l),R=u.getX(R)),pn.a.fromBufferAttribute(p,S),pn.b.fromBufferAttribute(p,l),pn.c.fromBufferAttribute(p,R),r&&(pn.a.applyMatrix4(Qe),pn.b.applyMatrix4(Qe),pn.c.applyMatrix4(Qe)),s.reset(),s.initialize(pn,S,l,R),to.length=0,au.clear(),pn.getNormal(ou);const w=e.coplanarSet.get(b);if(w)for(const T of w){const C=3*T;let L=C+0,N=C+1,O=C+2;m&&(L=m.getX(L),N=m.getX(N),O=m.getX(O));const F=au.getInstance();F.a.fromBufferAttribute(M,L),F.b.fromBufferAttribute(M,N),F.c.fromBufferAttribute(M,O),r||(F.a.applyMatrix4(Pi),F.b.applyMatrix4(Pi),F.c.applyMatrix4(Pi)),to.push(F)}if(s.addConstraintEdge){const T=e.getIntersectionEdges(b);if(T)for(const C of T)s.addConstraintEdge(C);s.triangulate()}else{const C=e.intersectionSet.get(b);for(let L=0,N=C.length;L<N;L++){const O=C[L],F=w&&w.has(O),k=3*O;let Z=k+0,Q=k+1,J=k+2;m&&(Z=m.getX(Z),Q=m.getX(Q),J=m.getX(J)),Di.a.fromBufferAttribute(M,Z),Di.b.fromBufferAttribute(M,Q),Di.c.fromBufferAttribute(M,J),r||(Di.a.applyMatrix4(Pi),Di.b.applyMatrix4(Pi),Di.c.applyMatrix4(Pi)),s.splitByTriangle(Di,F)}}const{triangles:x,triangleIndices:y=[],triangleConnectivity:A=[]}=s;for(let T=0,C=o.length;T<C;T++)o[T].initInterpolatedAttributeData(i.geometry,Xe,hi,S,l,R);Qs.clear();for(let T=0,C=x.length;T<C;T++){if(Qs.has(T))continue;const L=x[T],N=r?null:Qe;let O=null;L.getMidpoint(su);for(let F=0,k=to.length;F<k;F++){const Z=to[F];if(Z.containsPoint(su)){Z.getNormal(lu),O=ou.dot(lu)>0?fo:uo;break}}O===null&&(O=ud(L,g,N)),Oi.length=0,Mn.length=0;for(let F=0,k=n.length;F<k;F++){const Z=dd(n[F],O,r);Z!==ac&&(Oi.push(Z),Mn.push(o[F]))}if(Mn.length!==0){const F=[T];for(;F.length>0;){const k=F.pop();if(Qs.has(k))continue;Qs.add(k);const Z=y[k];let Q=null,J=null,st=null;Z&&(Q=Z[0],J=Z[1],st=Z[2]);const ht=x[k];pn.getBarycoord(ht.a,li.a),pn.getBarycoord(ht.b,li.b),pn.getBarycoord(ht.c,li.c);for(let yt=0,vt=Mn.length;yt<vt;yt++){const q=Mn[yt],et=Oi[yt]===Zr,at=h!==et;q.appendInterpolatedAttributeData(f,li.a,Q,at),at?(q.appendInterpolatedAttributeData(f,li.c,st,at),q.appendInterpolatedAttributeData(f,li.b,J,at)):(q.appendInterpolatedAttributeData(f,li.b,J,at),q.appendInterpolatedAttributeData(f,li.c,st,at))}}}}}return E.length}function hu(i,t,e,n,r,s,o=0){Qe.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?Xe.copy(Qe):Xe.identity();const a=Xe.determinant()<0;hi.getNormalMatrix(Xe).multiplyScalar(a?-1:1);const h=t.geometry.boundsTree,d=i.geometry.groupIndices,u=i.geometry.index,g=i.geometry.attributes.position,m=[],M=i.geometry.halfEdges,E=new Set(e.ids),v=sc(i.geometry);for(let _=0;_<v&&E.size!==v;_++){if(E.has(_))continue;E.add(_),m.push(_);const b=3*_;let f=b+0,c=b+1,S=b+2;u&&(f=u.getX(f),c=u.getX(c),S=u.getX(S)),gn.a.fromBufferAttribute(g,f),gn.b.fromBufferAttribute(g,c),gn.c.fromBufferAttribute(g,S),r&&(gn.a.applyMatrix4(Qe),gn.b.applyMatrix4(Qe),gn.c.applyMatrix4(Qe));const l=ud(gn,h,r?null:Qe);Oi.length=0,Mn.length=0;for(let R=0,w=n.length;R<w;R++){const x=dd(n[R],l,r);x!==ac&&(Oi.push(x),Mn.push(s[R]))}for(;m.length>0;){const R=m.pop();for(let w=0;w<3;w++){const x=M.getSiblingTriangleIndex(R,w);x!==-1&&!E.has(x)&&(m.push(x),E.add(x))}if(Mn.length!==0){const w=3*R;let x=w+0,y=w+1,A=w+2;u&&(x=u.getX(x),y=u.getX(y),A=u.getX(A));const T=o===-1?0:d[R]+o;if(gn.a.fromBufferAttribute(g,x),gn.b.fromBufferAttribute(g,y),gn.c.fromBufferAttribute(g,A),!di(gn))for(let C=0,L=Mn.length;C<L;C++){const N=Mn[C],k=Oi[C]===Zr!==a;N.appendIndexFromGeometry(i.geometry,Xe,hi,T,x,k),k?(N.appendIndexFromGeometry(i.geometry,Xe,hi,T,A,k),N.appendIndexFromGeometry(i.geometry,Xe,hi,T,y,k)):(N.appendIndexFromGeometry(i.geometry,Xe,hi,T,y,k),N.appendIndexFromGeometry(i.geometry,Xe,hi,T,A,k))}}}}}function Zv(i){return i=~~i,i+4-i%4}class jv{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=rd()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(Zv(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const We=new U,La=new U,Ua=new U,Na=new U,eo=new ce,Jv=new ce,Qv=new ce,tS=new ce;function eS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function uu(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class Fa extends jv{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class nS{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],h=r[a],d=h.array.constructor;n[a]||(n[a]=new Fa(d)),n[a].setType(d),n[a].itemSize=h.itemSize,n[a].normalized=h.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:h}=this,{attributes:d}=t;for(const u in a){const p=d[u];if(!p)throw new Error(`CSG Operations: Attribute ${u} not available on geometry.`);let g,m,M;if(u==="position"?(g=La.fromBufferAttribute(p,r).applyMatrix4(e),m=Ua.fromBufferAttribute(p,s).applyMatrix4(e),M=Na.fromBufferAttribute(p,o).applyMatrix4(e)):u==="normal"?(g=La.fromBufferAttribute(p,r).applyNormalMatrix(n),m=Ua.fromBufferAttribute(p,s).applyNormalMatrix(n),M=Na.fromBufferAttribute(p,o).applyNormalMatrix(n)):u==="tangent"?(g=La.fromBufferAttribute(p,r).transformDirection(e),m=Ua.fromBufferAttribute(p,s).transformDirection(e),M=Na.fromBufferAttribute(p,o).transformDirection(e)):(g=Jv.fromBufferAttribute(p,r),m=Qv.fromBufferAttribute(p,s),M=tS.fromBufferAttribute(p,o)),!h[u])h[u]=[g.clone(),m.clone(),M.clone()];else{const E=h[u];E[0].copy(g),E[1].copy(m),E[2].copy(M)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:h,invertedIndexMap:d}=this;for(;s.length<=t;)s.push(new Fa(Uint32Array));const u=r?d:h,p=s[t];if(n!==null&&u.has(n))p.push(u.get(n));else{u.set(n,o.position.count),p.push(o.position.count);for(const g in a){const m=o[g],M=g==="normal"||g==="tangent",E=r&&M,v=m.itemSize,[_,b,f]=a[g];eS(_,b,f,e,eo,M,E),uu(eo,v,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:h,forwardIndexMap:d,invertedIndexMap:u}=this;for(;a.length<=r;)a.push(new Fa(Uint32Array));const p=o?u:d,g=a[r];if(s!==null&&p.has(s))g.push(p.get(s));else{p.set(s,h.position.count),g.push(h.position.count);const{attributes:m}=t;for(const M in h){const E=h[M],v=m[M];if(!v)throw new Error(`CSG Operations: Attribute ${M} not available on geometry.`);const _=v.itemSize;M==="position"?(We.fromBufferAttribute(v,s).applyMatrix4(e),E.push(We.x,We.y,We.z)):M==="normal"?(We.fromBufferAttribute(v,s).applyNormalMatrix(n),o&&We.multiplyScalar(-1),E.push(We.x,We.y,We.z)):M==="tangent"?(We.fromBufferAttribute(v,s).transformDirection(e),o&&We.multiplyScalar(-1),E.push(We.x,We.y,We.z)):(eo.fromBufferAttribute(v,s),uu(eo,_,E))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const u in s){const p=s[u],{type:g,itemSize:m,normalized:M,length:E,count:v}=p,_=p.array.buffer;let b=o[u];(!b||b.count<v||b.array.type!==g)&&(b=new $e(new g(E),m,M),t.setAttribute(u,b),n=!0),b.array.set(new g(_,0,E),0),b.needsUpdate=!0}const h=r.reduce((u,p)=>p.count+u,0);(!t.index||a.count<h||a.array.type!==Uint32Array)&&(t.setIndex(new $e(new Uint32Array(h),1)),n=!0),t.clearGroups();let d=0;for(let u=0,p=Math.min(e.length,r.length);u<p;u++){const{index:g,materialIndex:m}=e[u],{count:M}=r[g],E=r[g].array.buffer;M!==0&&(t.index.array.set(new Uint32Array(E,0,M),d),t.addGroup(d,M,m),d+=M)}t.setDrawRange(0,d),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function iS(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function rS(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function sS(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function oS(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function du(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class aS{get useCDTClipping(){return this.triangleSplitter instanceof Gh}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Gh:new Yh)}constructor(){this.triangleSplitter=new Yh,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new Yv}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new So){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:h,useGroups:d,consolidateGroups:u,removeUnusedMaterials:p,debug:g}=this;for(;a.length<r.length;)a.push(new nS);r.forEach((f,c)=>{a[c].initFromGeometry(t.geometry,h),iS(f.geometry,h)}),g.init(),Kv(t,e,n,o,a,{useGroups:d}),g.complete();const m=this.getGroupRanges(t.geometry),M=du(m,t.material),E=this.getGroupRanges(e.geometry),v=du(E,e.material);E.forEach(f=>f.materialIndex+=M.length);const _=[...M,...v];let b=[...m,...E].map((f,c)=>({...f,index:c}));return d?d&&u&&(b=rS(b,_),b.sort((f,c)=>f.materialIndex-c.materialIndex)):b=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((f,c)=>{const S=f.geometry;a[c].buildGeometry(S,b),t.matrixWorld.decompose(f.position,f.quaternion,f.scale),f.updateMatrix(),f.matrixWorld.copy(t.matrixWorld),d?(f.material=_,u&&oS(S.groups),p&&(f.material=sS(S.groups,_))):f.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new So){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let h=0,d=a.length;h<d;h++){const u=a[h];u.isOperationGroup?n(u,o):o(u)}},r=s=>{const o=s.children;let a=!1;for(let d=0,u=o.length;d<u;d++){const p=o[d];a=r(p)||a}const h=s.isDirty();if(h&&s.markUpdated(),a&&!s.isOperationGroup){let d;return n(s,u=>{d?d=this.evaluate(d,u,u.operation):d=this.evaluate(s,u,u.operation)}),s._cachedGeometry=d.geometry,s._cachedMaterials=d.material,!0}else return a||h};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const ti=new Rf;ti.background=new ie(1193046);const mi=new an(75,window.innerWidth/window.innerHeight,.1,1e3);mi.position.z=1.5;mi.position.y=1;const lS=document.getElementById("threeJsCanvas"),Hi=new O0({canvas:lS});Hi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Hi.domElement);window.addEventListener("resize",()=>{mi.aspect=window.innerWidth/window.innerHeight,mi.updateProjectionMatrix(),Hi.setSize(window.innerWidth,window.innerHeight),Hi.render(ti,mi)});const Tn=.5,gi=.5,cS=.05,ls=new Gi(Tn,gi,cS),hS=new So(ls),uS=new Gi(.2,.3,.2),dS=new So(uS),Po=new Gu,fS=new aS,Gn=fS.evaluate(hS,dS,ld);Gn.material=new Gu({flatShading:!0});Gn.position.z=-Tn/2;const Mo=new qe(ls,Po);Mo.position.z=Tn/2;const Wn=new qe(ls,Po);Wn.rotation.y=Math.PI/2;Wn.position.x=Tn*gi;const ns=new qe(ls,Po);ns.rotation.y=Math.PI/2;ns.position.x=-Tn*gi;const is=new qe(ls,Po);is.rotation.x=Math.PI/2;is.position.y=-Tn*gi;ti.add(Gn);ti.add(Mo);ti.add(Wn);ti.add(ns);ti.add(is);const pS=new Ql,fd=pS.addFolder("Resize");fd.add(Gn.scale,"x",.25,2);fd.add(Wn.scale,"x",.25,2);const gS=new z0(mi,Hi.domElement);gS.addEventListener("change",function(){Hi.render(ti,mi)});function pd(){requestAnimationFrame(pd),Mo.scale.x=Gn.scale.x,Wn.position.x=Gn.scale.x*Tn*gi,ns.position.x=-Gn.scale.x*Tn*gi,is.scale.x=Gn.scale.x,ns.scale.x=Wn.scale.x,Gn.position.z=-Wn.scale.x*Tn*gi,Mo.position.z=Wn.scale.x*Tn*gi,is.scale.y=Wn.scale.x,Hi.render(ti,mi)}pd();
