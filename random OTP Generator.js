/// Random otp generator


// 1.
// Number + String Otp Generator

function mixGenerateOtp(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var otp = '';
    for (var i = 0; i < length; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return otp;
    }
console.log(mixGenerateOtp(4));



// 2.
// Only Number Otp Generator

function generateOtp()
{
    var digits = '0123456789';
    var length = 4;
    var otp = '';
    for(var i=1; i<=length;i++)
    {
        var index = Math.floor(Math.random()*(digits.length));
        otp = otp + digits[index];
    }
    return otp;
}
console.log(generateOtp(4));



// 3.
// only string otp generator

function stringOtpGenerator()
{
    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var length = 4;
    var otp = '';
    for(var i=1; i<=length;i++)
    {
        var index = Math.floor(Math.random()*(str.length));
        otp = otp + str[index];
    }
    return otp;
}
console.log(stringOtpGenerator(4));