import {fetchEmbeds, submitEmbed} from './firebaseConfig.js';
import {Embedcode} from "./types";

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('embedForm') as HTMLFormElement;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = (document.getElementById('title') as HTMLInputElement).value;
        const date = new Date();
        const code = (document.getElementById('code') as HTMLTextAreaElement).value;
        const brand = (document.getElementById('brand') as HTMLSelectElement).value;

        const embed = { title, date, code, brand };

        console.log('Submitting data:', embed); // Debugging line

        try {
            await submitEmbed(embed);
            alert('Embed code submitted successfully!');
            location.reload(); // Reload to update the list
        } catch (error) {
            console.error('Error submitting embed code:', error);
        }
    });

    // Fetch and display embeds
    async function displayEmbeds() {
        try {
            const embeds = await fetchEmbeds();
            const embedList = document.getElementById('embedList') as HTMLUListElement;
            embedList.innerHTML = ''; // Clear existing list

            embeds.forEach((embed: any) => {
                const date = embed.date.toDate().toLocaleString();
                const listItem = document.createElement('li');
                listItem.textContent = `${embed.title} (${date}) - ${embed.brand}`;
                embedList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching embeds:', error);
        }
    }

    displayEmbeds();
});