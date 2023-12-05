import React from "react";
import { Link } from "react-router-dom";
import logo from '../Assets/Main_Logo_white.png'
import '../CSS/Dashboard.css'
import Chart from "./Chart";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BarAnimation from "./BarAnimation";

const AboutPage = () => {
    return (
        <div className="dashboard">
            <div className="sidebar grid-item">
                <div style={{ display: 'flex', paddingLeft: '20%', gap: '2px', paddingLeft:'3rem', gap:'1rem', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><p style={{ fontSize: '2rem' }}>Home</p></Link>
                </div>
                <div style={{ display: 'flex', paddingLeft: '20%', gap: '2px', paddingLeft:'3rem', gap:'1rem', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <Link to="/learnings" style={{ textDecoration: 'none', color: 'white' }}><p style={{ fontSize: '2rem' }}>Learnings</p></Link>
                </div>
                <div style={{ display: 'flex', paddingLeft: '20%', gap: '2px', paddingLeft:'3rem', gap:'1rem', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
                    </svg>
                    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}><p style={{ fontSize: '2rem' }}>Dashboard</p></Link>
                </div>
                <div style={{ display: 'flex', paddingLeft: '20%', gap: '2px', paddingLeft:'3rem', gap:'1rem', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                    </svg>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}><p style={{ fontSize: '2rem' }}>About Us</p></Link>
                </div>
                <div className='logend'>
                    <button className='SignOut Navcontent1' style={{width:'80%'}}> Sign In </button>
                </div>
            </div>
            <div className="leaderboard grid-item">
            </div>
            <Grid className="weeklyProgress" item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 351,
                        borderRadius: '12px',
                        backgroundColor: '#1D232C',
                        textAlign: 'center'
                    }}
                >
                    <Chart />
                </Paper>
            </Grid>
            <div className="successRate grid-item">
                <BarAnimation />
            </div>
        </div >
    )
};

export default AboutPage;