const tg = window.Telegram.WebApp;

tg.expand();

tg.setHeaderColor('#1a1a2e');
tg.setBackgroundColor('#1a1a2e');

// Конфигурация (меняй как хочешь!)
const CONFIG = {
    totalBalance: 1000.00,
    change: 12.34,
    changePercent: 1.25,
    assets: {
        usdt: 1000,
        ton: 0,
        btc: 0
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Simulator Wallet loaded!');
    
    document.querySelectorAll('.action-btn, .asset-item').forEach(el => {
        el.addEventListener('click', () => {
            if (tg.HapticFeedback) {
                tg.HapticFeedback.impactOccurred('light');
            }
        });
    });
});

function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}