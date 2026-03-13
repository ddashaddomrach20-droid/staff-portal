// Конфигурация портала СВОИ
// PIN-коды для доступа к отделам

const PORTAL_CONFIG = {
    departments: [
        { id: 'tp_chats', title: 'ТП Чаты', icon: 'message-square', pin: '1111', description: 'Поддержка водителей в чатах' },
        { id: 'tp_calls', title: 'ТП Звонки', icon: 'phone', pin: '2222', description: 'Голосовая поддержка' },
        { id: 'op_chats', title: 'ОП Чаты', icon: 'users', pin: '3333', description: 'Продажи в мессенджерах' },
        { id: 'op_requests', title: 'ОП Заявки', icon: 'file-text', pin: '4444', description: 'Обработка входящих лидов' },
        { id: 'new_driver', title: 'Новый водитель', icon: 'user-plus', pin: '5555', description: 'Подключение и старт работы' },
        { id: 'outbound', title: 'Исходящий трафик', icon: 'phone-outgoing', pin: '6666', description: 'Исходящий трафик и обзвон' },
        { id: 'connection', title: 'Отдел подключения', icon: 'plug', pin: '7777', description: 'Подключение водителей к парку' },
        { id: 'otok_psmz', title: 'Отток/ПСМЗ', icon: 'trending-down', pin: '8888', description: 'Отток, ПСМЗ, НВ, Негатив' },
        { id: 'otdel_negativ', title: 'Отдел негатив', icon: 'message-circle', pin: '9999', description: 'Отработка негатива' },
        { id: 'okk', title: 'ОКК', icon: 'clipboard-check', pin: '1001', description: 'Отдел контроля качества' }
    ],
    
    subdepartments: [
        { id: 'nv_vgruzki', title: 'НВ выгрузки', icon: 'download', description: 'Новые водители выгрузки' },
        { id: 'otok', title: 'Отток', icon: 'trending-down', description: 'Удержание водителей' },
        { id: 'psmz', title: 'ПСМЗ', icon: 'user-check', description: 'Парковая самозанятость' },
        { id: 'negativ_care', title: 'Отдел Заботы', icon: 'heart', description: 'Забота о клиентах' },
        { id: 'negativ_tp', title: 'ТП', icon: 'headphones', description: 'Техническая поддержка' },
        { id: 'negativ_okk', title: 'ОКК', icon: 'clipboard-check', description: 'Отдел контроля качества' }
    ]
};
