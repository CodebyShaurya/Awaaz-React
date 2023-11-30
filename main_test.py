from flask import Flask, jsonify, request
from flask_cors import CORS
import sounddevice as sd
from scipy.io.wavfile import write
from openai import OpenAI
import random
import wave
import requests
import io

app = Flask(__name__)
cors=CORS(app)
COUPLED = {}
OPENAI_API_KEY = "API K$Y"
FS = 44100  # Sample rate
SECONDS = 5  # Duration of recording

SOUND_REFERENCE = {
    'S':'SH',
    'F':'TH',
    'L':'R',
    'B':'V',
    'P':'F',
    'D':'T'
}
LETTERS = ['S', 'F', 'L', 'B', 'P', 'T']
EXAMPLE = {
    'S': 'sunday',
    'F': 'free',
    'L': 'love',
    'B': 'boat',
    'P': 'pen',
    'T': 'tree'
}

REMEDY = {
        'P': ['Put your lips together to make the sound. ', "Vocal cords don't vibrate for voiceless sounds."],
        'B': ['Put your lips together to make the sound. '],
        'M': ['Put your lips together to make the sound. ', 'Air flows through your nose.'],
        'W': ['Put your lips together and shape your mouth like you are saying "oo".'],
        'F': ['Place your bottom lip against your upper front teeth. ', 'Top teeth may be on your bottom lip.'],
        'V': ['Place your bottom lip against your upper front teeth. ', 'Top teeth may be on your bottom lip.'],
        'S': ['Keep your teeth close together to make the sound. ',
              'The ridge right behind your two front teeth is involved. ', 'The front of your tongue is used. ',
              "Vocal cords don't vibrate for voiceless sounds."],
        'Z': ['Keep your teeth close together to make the sound. ',
              'The ridge right behind your two front teeth is involved. ', 'The front of your tongue is used.'],
        'th': ['Place your top teeth on your bottom lip and let your tongue go between your teeth for the sound. ',
               'The front of your tongue is involved.'],
        'TH': [
            'Place your top teeth on your bottom lip and let your tongue go between your teeth for the sound (as in thin). ',
            'The front of your tongue is involved.'],
        'N': ['Air flows through your nose. ', 'The ridge right behind your two front teeth is involved. ',
              'The front of your tongue is used.'],
        'NG': ['Air flows through your nose.'],
        'SING': ['Air flows through your nose.'],
        'L': ['The ridge right behind your two front teeth is involved. ', 'The front of your tongue is used.'],
        'T': ['The ridge right behind your two front teeth is involved. ', 'The front of your tongue is used. ',
              "Vocal cords don't vibrate for voiceless sounds."],
        'D': ['The ridge right behind your two front teeth is involved. ', 'The front of your tongue is used.'],
        'CH': ['The front-roof of your mouth is the right spot for the sound.'],
        'J': ['The front-roof of your mouth is the right spot for the sound. ', 'The front of your tongue is used.'],
        'SH': ['The front-roof of your mouth is the right spot for the sound. ', 'The front of your tongue is used.'],
        'ZH': ['The front-roof of your mouth is the right spot for the sound. ', 'The front of your tongue is used.'],
        'K': ['The back-roof of your mouth is the right spot for the sound. ', 'The back of your tongue is used. ',
              "Vocal cords don't vibrate for voiceless sounds."],
        'G': ['The back-roof of your mouth is the right spot for the sound. ', 'The back of your tongue is used.'],
        'R': ['The back-roof of your mouth is the right spot for the sound. ', 'The back of your tongue is used.'],
        'Y': ['The front of your tongue is used.'],
        'CH': ['The front of your tongue is used.'],
        'H': ['Your lungs provide the airflow for every sound, especially this one.']
    }

def check(word_given, word_recieved, check_for):
    para = word_given != word_recieved
    while word_given != word_recieved:
        if word_recieved[0:SOUND_REFERENCE[check_for]] == SOUND_REFERENCE[check_for]:
            remedy_list = {
                "remedy_list": REMEDY[check_for]
            }
            return jsonify(remedy_list)
        else:
            output = {
                "output": "PLEASE TRY AGAIN WRONG PRONUNCIATION"
            }
    print('VERY GOOD!! Correct pronounciation \n')

print('running')
@app.route("/generate_word", methods=["GET"])
def generate_word():
    global COUPLED
    COUPLED = random.choice(LETTERS)
    word_data = {
        "word1": EXAMPLE[COUPLED[0]],
        "letter": COUPLED[0],
    }
    return jsonify(word_data)


# @app.route('/save-audio', methods=['POST'])
# def save_audio():
#     data = request.get_json()
#     blob_url = data.get('blobURL')
#     print('hi')
#     # Fetch the blob data
#     response = requests.get(blob_url)
#     blob_data = io.BytesIO(response.content)
#     print('hi')
#     # Convert blob data to buffer (assuming it's an audio file)
#     print('hi')
#     buffer = blob_data.getvalue()

#     # Save the audio data to a file (you may need to adjust this based on your requirements)
#     with wave.open("output.wav", "wb") as wf:
#         wf.setnchannels(1)  # adjust based on the audio channels
#         wf.setsampwidth(2)  # adjust based on the sample width
#         wf.setframerate(44100)  # adjust based on the audio framerate
#         wf.writeframes(buffer)

#     return "Audio saved successfully"

@app.route('/record_audio', methods=['POST'])
def audio_to_text(file_path):
    client = OpenAI(api_key=OPENAI_API_KEY)
    #audio_file = open(file_path, "rb")
    transcript = client.audio.transcriptions.create(
        model="whisper-1",
        file=file_path,
        response_format="text"
    )
    return transcript






if __name__ == "__main__":
    app.run(debug=True, port=5000)
