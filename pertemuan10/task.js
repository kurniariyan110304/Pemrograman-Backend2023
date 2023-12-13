/**
 * Function to display download result
 * @param {string} result - Downloaded file name
 */
const showDownload = (result) => {
    console.log(`Download selesai`);
    console.log(`Hasil Download: ${result}`);
  };
  
  /**
   * Function to download a file
   * @returns {Promise<string>} - Promise with the downloaded file name
   */
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  };
  
  /**
   * Main function to initiate download and display result
   */
  const main = async () => {
    try {
      const result = await download();
      showDownload(result);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };
  
  // Call the main function
  main();
  