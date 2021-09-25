import liff from '@line/liff';
export function useLiff(){
    
    function onInit(cb){
        liff.init({ liffId: '1656460289-38KZLmDv' }).then(() => {
            liff.getProfile().then(profile => {
                cb(profile);
            }).catch(err => {
                console.log('error', err);
            })
        });
    }
    // function getProfile(cb){
    //     liff.getProfile().then(profile => {
    //         cb(profile);
    //     }).catch(err => {
    //         console.log('error', err);
    //     })
    // }
    return {onInit}
    
}