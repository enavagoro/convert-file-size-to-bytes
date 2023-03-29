
/**
 * Convert a string representation of file size to bytes.
 * Example: '100kb' => 102400 bytes
 * @param sizeString The string representation of file size.
 * @returns The size in bytes.
 * @throws An error if the size string is invalid.
 */

export const convertToBytes = (sizeString: string) => {
    const units: Record<string, number> = {
        'b': 1,
        'kb': 1024,
        'mb': 1024 * 1024,
        'gb': 1024 * 1024 * 1024,
        'tb': 1024 * 1024 * 1024 * 1024,
        'pb': 1024 * 1024 * 1024 * 1024 * 1024
    };

    const match = sizeString.toLowerCase().match(/^(\d+)\s*([a-z]*)$/);
    if (!match) {
        throw new Error(`Invalid size string: ${sizeString}`);
    }

    const size = parseInt(match[1], 10);
    const unit = match[2] || 'b';
    const unitMultiplier = units[unit];
    if (!unitMultiplier) {
        throw new Error(`Invalid unit: ${unit}`);
    }

    return size * unitMultiplier;
};