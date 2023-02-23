import { Platform } from 'react-native';

function getFontSize(font) {
    return font;
}

const isIos = Platform.OS === 'ios';

const regularFont = {
    fontWeight : '400'
};
const mediumFont = {
    fontWeight : '500'
};
const semiFont = {
    fontWeight : '600'
};
const boldFont = {
    fontWeight : '700'
};

export default {
    bold    : boldFont,
    semi    : semiFont,
    medium  : mediumFont,
    regular : regularFont,
    font6   : getFontSize(6),
    font8   : getFontSize(8),
    font10  : getFontSize(10),
    font12  : getFontSize(12),
    font13  : getFontSize(13),
    font14  : getFontSize(14),
    font15  : getFontSize(15),
    font16  : getFontSize(16),
    font18  : getFontSize(18),
    font20  : getFontSize(20),
    font21  : getFontSize(21),
    font22  : getFontSize(22),
    font23  : getFontSize(23),
    font24  : getFontSize(24),
    font26  : getFontSize(26),
    font27  : getFontSize(27),
    font28  : getFontSize(28),
    font30  : getFontSize(30),
    font32  : getFontSize(32),
    font36  : getFontSize(36),
    font38  : getFontSize(38),
    font40  : getFontSize(40),
    font42  : getFontSize(42),
    font48  : getFontSize(48)
};
