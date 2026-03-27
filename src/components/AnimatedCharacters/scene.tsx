import type { RefObject } from 'react';

interface PupilProps {
    size?: number;
    maxDistance?: number;
    pupilColor?: string;
}

const Pupil = ({ size = 12, maxDistance = 5, pupilColor = 'black' }: PupilProps) => {
    return (
        <div
            data-max-distance={maxDistance}
            className="pupil"
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: pupilColor,
                willChange: 'transform',
            }}
        />
    );
};

interface EyeBallProps {
    size?: number;
    pupilSize?: number;
    maxDistance?: number;
    eyeColor?: string;
    pupilColor?: string;
}

const EyeBall = ({
    size = 48,
    pupilSize = 16,
    maxDistance = 10,
    eyeColor = 'white',
    pupilColor = 'black',
}: EyeBallProps) => {
    return (
        <div
            className="eyeball"
            data-max-distance={maxDistance}
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: eyeColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                willChange: 'height',
            }}
        >
            <div
                className="eyeball-pupil"
                style={{
                    width: pupilSize,
                    height: pupilSize,
                    borderRadius: '50%',
                    backgroundColor: pupilColor,
                    willChange: 'transform',
                }}
            />
        </div>
    );
};

interface AnimatedCharacterSceneProps {
    containerRef: RefObject<HTMLDivElement>;
    purpleRef: RefObject<HTMLDivElement>;
    blackRef: RefObject<HTMLDivElement>;
    yellowRef: RefObject<HTMLDivElement>;
    orangeRef: RefObject<HTMLDivElement>;
    purpleFaceRef: RefObject<HTMLDivElement>;
    blackFaceRef: RefObject<HTMLDivElement>;
    yellowFaceRef: RefObject<HTMLDivElement>;
    orangeFaceRef: RefObject<HTMLDivElement>;
    yellowMouthRef: RefObject<HTMLDivElement>;
}

export function AnimatedCharacterScene({
    containerRef,
    purpleRef,
    blackRef,
    yellowRef,
    orangeRef,
    purpleFaceRef,
    blackFaceRef,
    yellowFaceRef,
    orangeFaceRef,
    yellowMouthRef,
}: AnimatedCharacterSceneProps) {
    return (
        <div ref={containerRef} style={{ position: 'relative', width: 550, height: 400 }}>
            <div
                ref={purpleRef}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 70,
                    width: 180,
                    height: 400,
                    backgroundColor: '#6C3FF5',
                    borderRadius: '10px 10px 0 0',
                    zIndex: 1,
                    transformOrigin: 'bottom center',
                    willChange: 'transform',
                }}
            >
                <div
                    ref={purpleFaceRef}
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        gap: 32,
                        left: 45,
                        top: 40,
                    }}
                >
                    <EyeBall size={18} pupilSize={7} maxDistance={5} eyeColor="white" pupilColor="#2D2D2D" />
                    <EyeBall size={18} pupilSize={7} maxDistance={5} eyeColor="white" pupilColor="#2D2D2D" />
                </div>
            </div>

            <div
                ref={blackRef}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 240,
                    width: 120,
                    height: 310,
                    backgroundColor: '#2D2D2D',
                    borderRadius: '8px 8px 0 0',
                    zIndex: 2,
                    transformOrigin: 'bottom center',
                    willChange: 'transform',
                }}
            >
                <div
                    ref={blackFaceRef}
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        gap: 24,
                        left: 26,
                        top: 32,
                    }}
                >
                    <EyeBall size={16} pupilSize={6} maxDistance={4} eyeColor="white" pupilColor="#2D2D2D" />
                    <EyeBall size={16} pupilSize={6} maxDistance={4} eyeColor="white" pupilColor="#2D2D2D" />
                </div>
            </div>

            <div
                ref={orangeRef}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 240,
                    height: 200,
                    backgroundColor: '#FF9B6B',
                    borderRadius: '120px 120px 0 0',
                    zIndex: 3,
                    transformOrigin: 'bottom center',
                    willChange: 'transform',
                }}
            >
                <div
                    ref={orangeFaceRef}
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        gap: 32,
                        left: 82,
                        top: 90,
                    }}
                >
                    <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                    <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                </div>
            </div>

            <div
                ref={yellowRef}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 310,
                    width: 140,
                    height: 230,
                    backgroundColor: '#E8D754',
                    borderRadius: '70px 70px 0 0',
                    zIndex: 4,
                    transformOrigin: 'bottom center',
                    willChange: 'transform',
                }}
            >
                <div
                    ref={yellowFaceRef}
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        gap: 24,
                        left: 52,
                        top: 40,
                    }}
                >
                    <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                    <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" />
                </div>
                <div
                    ref={yellowMouthRef}
                    style={{
                        position: 'absolute',
                        width: 80,
                        height: 4,
                        backgroundColor: '#111111',
                        borderRadius: 9999,
                        left: 40,
                        top: 88,
                    }}
                />
            </div>
        </div>
    );
}
