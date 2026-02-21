// job data
let jobs = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "All" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "All" },
    { id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "All" },
    { id: 4, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices.", status: "All" },
    { id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills required.", status: "All" },
    { id: 6, companyName: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation.", status: "All" },
    { id: 7, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required.", status: "All" },
    { id: 8, companyName: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.", status: "All" }
];

let currentTab = 'All';

// main render function

const renderJobs = () => {
    const container = document.getElementById('job-container');
    const totalCountEl = document.getElementById('total-count');
    const interviewCountEl = document.getElementById('interview-count');
    const rejectedCountEl = document.getElementById('rejected-count');
    const listCountEl = document.getElementById('job-list-count');

    // filter logic
    const filteredJobs = jobs.filter(job => currentTab === 'All' ? true : job.status === currentTab);

    // dashboard numbers
    const totalCount = jobs.length;
    totalCountEl.textContent = totalCount;
    interviewCountEl.textContent = jobs.filter(j => j.status === 'Interview').length;
    rejectedCountEl.textContent = jobs.filter(j => j.status === 'Rejected').length;

    // selected job amount
    listCountEl.textContent = currentTab === 'All' 
        ? `${totalCount} jobs` 
        : `${filteredJobs.length} of ${totalCount} jobs`;

    // empty state
    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                <div class="mb-6">
                    <img src="jobs.png" alt="No Jobs Available" class="h-32 w-32 object-contain mx-auto" />
                </div>
                <h3 class="text-2xl font-bold text-[#003366] mb-2">No jobs available</h3>
                <p class="text-gray-500">Check back soon for new job opportunities.</p>
            </div>
        `;
        return;
    }

    // filtered data and render cards
    container.innerHTML = filteredJobs.map(job => `
        <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
            
            <button onclick="deleteJob(${job.id})" class="absolute top-8 right-8 text-gray-300 hover:text-red-500 transition-colors border border-gray-100 p-1.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <h3 class="text-xl font-bold text-[#003366] mb-1">${job.companyName}</h3>
            <p class="text-gray-400 font-medium mb-4">${job.position}</p>
            
            <div class="flex flex-wrap items-center gap-2 text-gray-500 text-sm mb-6">
                <span>${job.location}</span> • <span>${job.type}</span> • <span>${job.salary}</span>
            </div>

            <div class="mb-6">
                <span class="px-3 py-1.5 rounded text-[11px] font-bold tracking-widest uppercase ${getStatusStyle(job.status)}">
                    ${job.status === 'All' ? 'Not Applied' : job.status}
                </span>
            </div>

            <p class="text-gray-600 mb-8 max-w-3xl leading-relaxed">${job.description}</p>

            <div class="flex gap-2">
                <button onclick="updateJobStatus(${job.id}, 'Interview')" 
                    class="border border-[#10b981] px-4 py-1.5 rounded text-[11px] font-bold uppercase transition-colors ${job.status === 'Interview' ? 'bg-[#10b981] text-white' : 'text-[#10b981] hover:bg-emerald-50'}">
                    Interview
                </button>
                <button onclick="updateJobStatus(${job.id}, 'Rejected')" 
                    class="border border-[#ef4444] px-4 py-1.5 rounded text-[11px] font-bold uppercase transition-colors ${job.status === 'Rejected' ? 'bg-[#ef4444] text-white' : 'text-[#ef4444] hover:bg-red-50'}">
                    Rejected
                </button>
            </div>
        </div>
    `).join('');
};

const getStatusStyle = (status) => {
    switch(status) {
        case 'Interview': return 'bg-emerald-100 text-emerald-700';
        case 'Rejected': return 'bg-red-100 text-red-700';
        default: return 'bg-[#E8F0FE] text-[#003366]';
    }
};

window.switchTab = (tab) => {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-active'));
    document.getElementById(`tab-${tab}`).classList.add('tab-active');
    renderJobs();
};

window.updateJobStatus = (id, newStatus) => {
    jobs = jobs.map(job => {
        if (job.id === id) {
            const updatedStatus = job.status === newStatus ? 'All' : newStatus;
            return { ...job, status: updatedStatus };
        }
        return job;
    });
    renderJobs();
};

window.deleteJob = (id) => {
    if(confirm("Are you sure you want to delete this job record?")) {
        jobs = jobs.filter(job => job.id !== id);
        renderJobs();
    }
};

document.addEventListener('DOMContentLoaded', renderJobs);