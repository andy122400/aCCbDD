import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Snackbar {
    constructor(private snackbar: MatSnackBar) {}

    showSuccess(message: string, action?: string, config?: MatSnackBarConfig) {
        this.snackbar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'snack-bar-success',
            ...config,
        });
    }

    showError(message: string, action?: string, config?: MatSnackBarConfig) {
        this.snackbar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'snack-bar-error',
            ...config,
        });
    }

    showWarning(message: string, action?: string, config?: MatSnackBarConfig) {
        this.snackbar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'snack-bar-warning',
            ...config,
        });
    }
}
