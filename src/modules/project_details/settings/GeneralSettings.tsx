import { Grid, TextField, Typography } from '@mui/material'

export const GeneralSettings = () => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                General
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-name"
                        name="project-name"
                        label="Project Name"
                        fullWidth
                        autoComplete="project-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-description"
                        name="project-description"
                        label="Project Description"
                        fullWidth
                        autoComplete="project-description"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-url"
                        name="project-url"
                        label="Project URL"
                        fullWidth
                        autoComplete="project-url"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-repository"
                        name="project-repository"
                        label="Project Repository"
                        fullWidth
                        autoComplete="project-repository"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-license"
                        name="project-license"
                        label="Project License"
                        fullWidth
                        autoComplete="project-license"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-license-url"
                        name="project-license-url"
                        label="Project License URL"
                        fullWidth
                        autoComplete="project-license-url"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="project-license-text"
                        name="project-license-text"
                        label="Project License Text"
                        fullWidth
                        autoComplete="project-license-text"
                    />
                </Grid>
            </Grid>
        </>
    )
}
