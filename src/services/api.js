// Simple mock API service. Replace with real fetch/axios calls when backend is available.

export async function getConversations() {
    try {
        const res = await fetch('/api/conversations/');
        if (res.ok) {
            return await res.json();
        }
    } catch (_) {}
    return [
        { id: 'sebuhi-quliyev', name: 'Sebuhi Quliyev', lastMessage: 'Salam necesiz? ne vaxt geleceksiz?', unreadCount: 12, date: 'Sunday' },
        { id: 'rufet-nuriyev', name: 'Aysel Hesenova', lastMessage: 'Isler haqqinda melumat ver', unreadCount: 4, date: 'Sunday' },
        { id: 'muxtar-bayramov', name: 'Alex Tom', lastMessage: 'Important for me', unreadCount: 1, date: 'Sunday' }
    ];
}

export async function getMessages(username) {
    try {
        const res = await fetch(`/api/messages/${encodeURIComponent(username)}/`);
        if (res.ok) {
            return await res.json();
        }
    } catch (_) {}
    return [
        { id: 1, sender: 'me', content: 'Salam necesen?' },
        { id: 2, sender: 'me', content: 'ne vaxt geleceksen?' },
        { id: 3, sender: 'me', content: 'gelende xeber edersen sene sozum olacqq yadinnan cixmazki?' },
        { id: 4, sender: 'me', content: 'Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
        { id: 5, sender: 'them', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
    ];
}

