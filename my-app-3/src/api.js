export const CallBackendApi = async (ApiAddress, SetData) => {
    var DataInfo = await fetch(ApiAddress);
    var data = await DataInfo.json();
    SetData(data)
};

export const requestHutBurr = () =>{
    const HutBarr = [
        {"title":"Новинки", "pictures_addres":"/Images/LampOne.png"},
        {"title":"Подвесы", "pictures_addres":"/Images/LampTwo.png"},
        {"title":"Люстры", "pictures_addres":"/Images/LampThree.png"},
        {"title":"Кольцевые люстры", "pictures_addres":"/Images/LampOne.png"},
        {"title":"Рядные светильники", "pictures_addres":"/Images/LampTwo.png"},
        {"title":"Каскадне светильники", "pictures_addres":"/Images/LampThree.png"},
        {"title":"Бра", "pictures_addres":"/Images/LampOne.png"},
        {"title":"Потолочные люстры", "pictures_addres":"/Images/LampTwo.png"},
        {"title":"Потолочные светильники", "pictures_addres":"/Images/LampThree.png"},
        {"title":"Настольные лампы", "pictures_addres":"/Images/LampOne.png"},
        {"title":"Торшеры", "pictures_addres":"/Images/LampTwo.png"},
        {"title":"Споты", "pictures_addres":"/Images/LampThree.png"}
    ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(HutBarr);
        },0);
    });
};

export const requestNewProduction = () =>{
    const Production = [
        {"title":"RID", "price":"39 900", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"TOFT DOME", "price":"38 900", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"PIO", "price":"52 600", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"IVES", "price":"189 600", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"PROBUS", "price":"69 800", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"RIVER", "price":"279 800", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"LIND", "price":"42 600", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"LASSE", "price":"118 800", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"LONA STONE", "price":"26 800", "price_current":"p", "picture_addres":"jkjkjkljkj","categoryId":4},
        {"title":"BURE", "price":"12 600", "price_current":"p", "picture_addres":"jkjkjkljkj", "categoryId":5},
        {"title":"BONDEN", "price":"28 600", "price_current":"p", "picture_addres":"jkjkjkljkj", "categoryId":5},
        {"title":"LEIF", "price":"21 300", "price_current":"p", "picture_addres":"jkjkjkljkj", "categoryId":5},
    ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Production);
        },0);
    });
};