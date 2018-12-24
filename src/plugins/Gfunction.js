import {
    Message
} from 'element-ui';

export default {
    install (Vue, options){
        Vue.prototype.IsPasMob = function (password, mobile) {
            if (mobile == "") {
                Message({
                    message: '手机号不为空',
                    type: 'warning',
                    center: true
                });
                return false
            }
            if (!/^1[3456789]\d{9}$/.test(Number(mobile)) && mobile != "") {
                Message({
                    message: '手机号不合法',
                    type: 'warning',
                    center: true
                });
                return false
            }


            if (password == "") {
                Message({
                    message: '密码不能为空',
                    type: 'warning',
                    center: true
                });
                return false
            } else if (password.length < 6 || password.length > 20) {
                Message({
                    message: '密码只能6-12位',
                    type: 'warning',
                    center: true
                });
                return false
            } else {
                var reg = new RegExp(
                    "[-`~!@#$%^&*()+=|{}':;',\\[\\].<>/\"?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]"
                );
                if (reg.test(password)) {
                    Message({
                        message: '不能输入特殊字符',
                        type: 'warning',
                        center: true
                    });
                    return false
                }
            }
            return true
        }
    }
}